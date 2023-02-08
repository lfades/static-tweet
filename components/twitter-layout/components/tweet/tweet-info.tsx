import cn from 'clsx'
import format from 'date-fns/format'
import type { Tweet } from 'lib/twitter/api'
import useMounted from 'lib/use-mounted'
import s from './tweet-info.module.css'

export default function TweetInfo({ tweet }: { tweet: Tweet }) {
  const mounted = useMounted()
  const likeUrl = `https://twitter.com/intent/like?tweet_id=${tweet.id_str}`
  const tweetUrl = `https://twitter.com/${tweet.user.screen_name}/status/${tweet.id_str}`
  const createdAt =
    typeof window !== 'undefined' && mounted ? new Date(tweet.created_at) : null

  return (
    <div className={s.info}>
      <a
        className={s.like}
        href={likeUrl}
        title="Like"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className={s.heart}>
          <div className={cn('icon', s['icon-heart'])} role="img" />
        </div>
        {tweet.favorite_count > 0 && (
          <span className={s.likes}>{tweet.favorite_count}</span>
        )}
      </a>
      {createdAt && (
        <a
          className={s.time}
          href={tweetUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          <time
            title={`Time Posted: ${createdAt.toUTCString()}`}
            dateTime={createdAt.toISOString()}
          >
            {format(createdAt, 'h:mm a - MMM d, y')}
          </time>
        </a>
      )}
    </div>
  )
}
