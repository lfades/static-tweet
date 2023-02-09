import type { FC } from 'react'
import type {
  Indices,
  Tweet,
  Hashtag as THashtag,
  UserMention,
} from 'lib/twitter/api'
import { Hashtag, Mention } from '../twitter'
import s from './tweet-body.module.css'

type TextEntity = {
  indices: Indices
  type: 'text'
}

type Entity =
  | TextEntity
  | (THashtag & { type: 'hashtag' })
  | (UserMention & { type: 'mention' })

function addEntities(
  result: Entity[],
  entities: (THashtag | UserMention)[],
  type: Entity['type']
) {
  for (const entity of entities) {
    for (const [i, item] of result.entries()) {
      if (
        entity.indices[0] < item.indices[0] ||
        entity.indices[1] > item.indices[1]
      )
        continue

      const items = [{ ...entity, type }] as Entity[]

      if (item.indices[0] < entity.indices[0]) {
        items.unshift({
          indices: [item.indices[0], entity.indices[0]],
          type: 'text',
        })
      }
      if (item.indices[1] > entity.indices[1]) {
        items.push({
          indices: [entity.indices[1], item.indices[1]],
          type: 'text',
        })
      }

      result.splice(i, 1, ...items)
      break // Break out of the loop to avoid iterating over the new items
    }
  }
}

function getEntities(tweet: Tweet) {
  const result: Entity[] = [{ indices: tweet.display_text_range, type: 'text' }]

  addEntities(result, tweet.entities.hashtags, 'hashtag')
  addEntities(result, tweet.entities.user_mentions, 'mention')

  return result
}

const TweetBody: FC<{ tweet: Tweet }> = ({ tweet }) => {
  const entities = getEntities(tweet)

  return (
    <p className={s.root}>
      {entities.map((item, i) => {
        const text = tweet.text.slice(...item.indices)

        switch (item.type) {
          case 'text':
            return <span key={i}>{text}</span>
          case 'hashtag':
            return (
              <Hashtag
                key={i}
                href={`https://twitter.com/hashtag/${item.text}`}
              >
                {text}
              </Hashtag>
            )
          case 'mention':
            return (
              <Mention key={i} href={`https://twitter.com/${item.screen_name}`}>
                {text}
              </Mention>
            )
        }
      })}
    </p>
  )
}

export default TweetBody
