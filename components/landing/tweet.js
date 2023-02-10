import TweetSkeleton from '../twitter-layout/tweet-skeleton'
import twitterTheme from '../twitter-layout/twitter.module.css'
import TweetComponent from '../twitter-layout/components/tweet/tweet'
import darkTheme from '../dark-layout/dark.module.css'
import styles from './tweet.module.css'
import { useTheme } from './page'

const cn = (arr) => arr.filter(Boolean).join(' ')

const Tweet = ({ data, skeleton }) => {
  const [theme, setTheme] = useTheme()
  const isDark = theme === 'dark'

  return (
    <div
      className={cn([
        styles.tweet,
        isDark ? darkTheme.theme : twitterTheme.theme,
      ])}
    >
      {skeleton ? <TweetSkeleton /> : <TweetComponent data={data} />}
      <button
        className={cn([styles.button, isDark && styles['dark-button']])}
        type="button"
        onClick={() => setTheme(isDark ? 'light' : 'dark')}
      >
        Switch theme
      </button>
    </div>
  )
}

export default Tweet
