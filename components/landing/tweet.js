import Node from '../html/node';
import TweetSkeleton from '../twitter-layout/tweet-skeleton';
import components from '../twitter-layout/components';
import styles from './tweet.module.css';

const Tweet = ({ ast, skeleton }) => (
  <div className={styles.tweet}>
    {skeleton ? <TweetSkeleton /> : <Node components={components} node={ast[0]} />}
  </div>
);

export default Tweet;
