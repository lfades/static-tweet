import { TweetSkeleton, EmbeddedTweet } from 'next-tweet'
import Button from './button'
import { useTheme } from './page'
import s from './tweet.module.css'

const Tweet = ({ data, skeleton }) => {
  const [theme, setTheme] = useTheme()

  return (
    <div className={s.root}>
      {skeleton ? <TweetSkeleton /> : <EmbeddedTweet tweet={data} />}
      <Button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
        Switch theme
      </Button>
    </div>
  )
}

export default Tweet
