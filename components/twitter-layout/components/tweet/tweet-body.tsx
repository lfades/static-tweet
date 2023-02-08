import type { FC } from 'react'
import type { Tweet } from 'lib/twitter/api'

function getContent(tweet: Tweet) {
  const { text } = tweet
  const content = [{ i: tweet.display_text_range, C: tweet.text }]
  const entities = [...tweet.entities.user_mentions, ...tweet.entities.hashtags]

  for (const entity of entities) {
    for (const [i, item] of content.entries()) {
      if (entity.indices[0] < item.i[0] || entity.indices[1] > item.i[1])
        continue

      const items = [
        {
          i: entity.indices,
          C: <span>{text.slice(...entity.indices)}</span>,
        },
      ]

      if (item.i[0] < entity.indices[0]) {
        items.unshift({
          i: [item.i[0], entity.indices[0]],
          C: text.slice(item.i[0], entity.indices[0]),
        })
      }
      if (item.i[1] > entity.indices[1]) {
        items.push({
          i: [entity.indices[1], item.i[1]],
          C: text.slice(entity.indices[1], item.i[1]),
        })
      }

      content.splice(i, 1, ...items)
      // console.log('EHH', items)
      break // Break out of the loop to avoid iterating over the new items
    }
  }

  return content
}

const TweetBody: FC<{ tweet: Tweet }> = ({ tweet }) => {
  const { text } = tweet
  const content = getContent(tweet)

  console.log(content.map((item) => item.i))

  return <p>{tweet.text}</p>
}

export default TweetBody
