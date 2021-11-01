import cn from 'clsx';
import formatNumber from '../../../../lib/format-number';
import s from './tweet-action.module.css';

export default function TweetAction({ tweet }) {
  const userUrl = `https://twitter.com/${tweet.username}`;
  const tweetUrl = `${userUrl}/status/${tweet.id}`;
  const count = tweet.replies + tweet.retweets;
  const isConversation = tweet.ctaType === 'conversation' || count > 4;

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
            {count ? formatNumber(count) : tweet.ctaCount} people are talking about this
          </span>
          <div className="icon icon-chevron" />
        </a>
      ) : (
        <a
          className={s.link}
          href={userUrl}
          title={`View ${tweet.name}'s profile on Twitter`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className={cn('icon', s['icon-profile'])} />
          <span className={s.text}>See {tweet.name}'s other Tweets</span>
          <div className={cn('icon', s['icon-chevron'])} />
        </a>
      )}
    </>
  );
}
