import clsx from 'clsx'
import twitterTheme from '../twitter-layout/twitter.module.css'
import darkTheme from '../dark-layout/dark.module.css'
import TweetSkeleton from '../twitter-layout/tweet-skeleton'
import TweetComponent from '../twitter-layout/tweet/tweet'
import Button from './button'
import { useTheme } from './page'
import s from './tweet.module.css'

const Tweet = ({ data, skeleton }) => {
  const [theme, setTheme] = useTheme()
  const isDark = theme === 'dark'

  return (
    <div
      className={clsx([s.root, isDark ? darkTheme.theme : twitterTheme.theme])}
    >
      {skeleton ? <TweetSkeleton /> : <TweetComponent data={data} />}
      <Button onClick={() => setTheme(isDark ? 'light' : 'dark')}>
        Switch theme
      </Button>
    </div>
  )
}

export default Tweet
