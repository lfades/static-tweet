import Node from '../html/node';
import TweetSkeleton from '../twitter-layout/tweet-skeleton';
import components from '../twitter-layout/components';
import twitterTheme from '../twitter-layout/twitter.module.css';
import darkTheme from '../dark-layout/dark.module.css';
import styles from './tweet.module.css';
import { useTheme } from './page';

const cn = arr => arr.filter(Boolean).join(' ');

const Tweet = ({ ast, skeleton }) => {
  const [theme, setTheme] = useTheme();
  const isDark = theme === 'dark';

  return (
    <div className={cn([styles.tweet, isDark ? darkTheme.theme : twitterTheme.theme])}>
      {skeleton ? <TweetSkeleton /> : <Node components={components} node={ast[0]} />}
      <button
        className={cn([styles.button, isDark && styles['dark-button']])}
        type="button"
        onClick={() => setTheme(isDark ? 'light' : 'dark')}
      >
        Switch theme
      </button>
    </div>
  );
};

export default Tweet;
