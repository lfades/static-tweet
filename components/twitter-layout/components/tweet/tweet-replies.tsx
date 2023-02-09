import cn from 'clsx'
import type { Tweet } from 'lib/twitter/api'
import formatNumber from 'lib/format-number'
import s from './tweet-replies.module.css'

export default function TweetReplies({ tweet }: { tweet: Tweet }) {
  const userUrl = `https://twitter.com/${tweet.user.screen_name}`
  const tweetUrl = `${userUrl}/status/${tweet.id_str}`
  const count = tweet.conversation_count
  const isConversation = tweet.news_action_type === 'conversation' || count > 4

  return (
    <>
      {isConversation ? (
        <div className={s.replies}>
          <a
            className={s.link}
            href={tweetUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className={s.text}>Read {formatNumber(count)} replies</span>
          </a>
        </div>
      ) : (
        <a
          className={s.link}
          href={userUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className={cn('icon', s['icon-profile'])} />
          <span className={s.text}>See {tweet.user.name}'s other Tweets</span>
          <div className={cn('icon', s['icon-chevron'])} />
        </a>
      )}
    </>
  )
}
