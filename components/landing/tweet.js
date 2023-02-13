import clsx from 'clsx'
import theme from 'next-tweet/theme.module.css'
import { TweetSkeleton, EmbeddedTweet } from 'next-tweet'
import Button from './button'
import { useTheme } from './page'
import s from './tweet.module.css'

const Tweet = ({ data, skeleton }) => {
  const [theme, setTheme] = useTheme()
  const isDark = theme === 'dark'

  return (
    <div className={clsx([s.root, isDark ? theme.dark : theme.light])}>
      {skeleton ? <TweetSkeleton /> : <EmbeddedTweet tweet={data} />}
      <Button onClick={() => setTheme(isDark ? 'light' : 'dark')}>
        Switch theme
      </Button>
    </div>
  )
}

export default Tweet
