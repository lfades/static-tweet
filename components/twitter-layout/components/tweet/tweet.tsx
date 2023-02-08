import type { Tweet } from 'lib/twitter/api'
import TweetHeader from './tweet-header'
import TweetInfo from './tweet-info'
import TweetAction from './tweet-action'
import { P } from '../text'
import s from './tweet.module.css'
import TweetBody from './tweet-body'

export default function Tweet({ data: tweet }: { data: Tweet }) {
  // console.log(JSON.stringify(tweet, null, 2))
  return (
    <div className={s.tweet}>
      <blockquote className={s.blockquote}>
        <TweetHeader tweet={tweet} />
        <TweetBody tweet={tweet} />
        <TweetInfo tweet={tweet} />
      </blockquote>
      <TweetAction tweet={tweet} />
    </div>
  )
}
