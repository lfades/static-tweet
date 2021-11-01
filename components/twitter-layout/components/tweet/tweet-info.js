import cn from 'clsx';
import format from 'date-fns/format';
import formatNumber from '../../../../lib/format-number';
import useMounted from '../../../../lib/use-mounted';
import s from './tweet-info.module.css';

export default function TweetInfo({ tweet }) {
  const mounted = useMounted();
  const likeUrl = `https://twitter.com/intent/like?tweet_id=${tweet.id}`;
  const tweetUrl = `https://twitter.com/${tweet.username}/status/${tweet.id}`;
  const createdAt = typeof window !== 'undefined' && mounted ? new Date(tweet.createdAt) : null;

  return (
    <div className={s.info}>
      <a className={s.like} href={likeUrl} title="Like" target="_blank" rel="noopener noreferrer">
        <div className={s.heart}>
          <div className={cn('icon', s['icon-heart'])} role="img" />
        </div>
        {(tweet.heartCount || tweet.likes > 0) && (
          <span className={s.likes}>{tweet.heartCount || formatNumber(tweet.likes)}</span>
        )}
      </a>
      {createdAt && (
        <a className={s.time} href={tweetUrl} target="_blank" rel="noopener noreferrer">
          <time
            title={`Time Posted: ${createdAt.toUTCString()}`}
            dateTime={createdAt.toISOString()}
          >
            {format(createdAt, 'h:mm a - MMM d, y')}
          </time>
        </a>
      )}
    </div>
  );
}
