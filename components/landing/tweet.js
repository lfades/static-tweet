import { useState } from 'react';
import Node from '../html/node';
import TweetSkeleton from '../twitter-layout/tweet-skeleton';
import components from '../twitter-layout/components';
import twitterTheme from '../twitter-layout/twitter.module.css';
import darkTheme from '../dark-layout/dark.module.css';
import styles from './tweet.module.css';

const cn = arr => arr.filter(Boolean).join(' ');

const Tweet = ({ ast, skeleton }) => {
  const [darkMode, setDarkMode] = useState(true);
  console.log(styles);
  return (
    <div className={cn([styles.background, darkMode && styles['dark-bg']])}>
      <div className={cn([styles.tweet, darkMode ? darkTheme.theme : twitterTheme.theme])}>
        {skeleton ? <TweetSkeleton /> : <Node components={components} node={ast[0]} />}
        <button
          className={cn([styles.button, darkMode && styles['dark-button']])}
          type="button"
          onClick={() => setDarkMode(!darkMode)}
        >
          Switch theme
        </button>
      </div>
    </div>
  );
};

export default Tweet;
