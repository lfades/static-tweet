import TweetHeader from './tweet-header';
import TweetInfo from './tweet-info';
import TweetAction from './tweet-action';
import s from './tweet.module.css';

export default function Tweet({ children, data }) {
  return (
    <div className={s.tweet}>
      <blockquote className={s.blockquote}>
        <TweetHeader tweet={data} />
        {children}
        <TweetInfo tweet={data} />
      </blockquote>
      <TweetAction tweet={data} />
    </div>
  );
}
