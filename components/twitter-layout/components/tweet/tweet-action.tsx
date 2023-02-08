import cn from 'clsx'
import type { Tweet } from 'lib/twitter/api'
import formatNumber from 'lib/format-number'
import s from './tweet-action.module.css'

export default function TweetAction({ tweet }: { tweet: Tweet }) {
  const userUrl = `https://twitter.com/${tweet.user.screen_name}`
  const tweetUrl = `${userUrl}/status/${tweet.id_str}`
  const count = tweet.conversation_count
  const isConversation = tweet.news_action_type === 'conversation' || count > 4

  return (
    <>
      {isConversation ? (
        <a
          className={s.link}
          href={tweetUrl}
          title="View the conversation on Twitter"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className={cn('icon', s['icon-reply'])} />
          <span className={s.text}>
            {count ? formatNumber(count) : tweet.conversation_count} people are
            talking about this
          </span>
          <div className="icon icon-chevron" />
        </a>
      ) : (
        <a
          className={s.link}
          href={userUrl}
          title={`View ${tweet.user.name}'s profile on Twitter`}
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
