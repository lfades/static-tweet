import type { Tweet } from 'lib/twitter/api'
import TweetHeader from './tweet-header'
import TweetInReplyTo from './tweet-in-reply-to'
import TweetBody from './tweet-body'
import TweetInfo from './tweet-info'
import TweetAction from './tweet-action'
import s from './tweet.module.css'

const Tweet = ({ data: tweet }: { data: Tweet }) => (
  <div className={s.tweet}>
    <article className={s.article}>
      <TweetHeader tweet={tweet} />
      {tweet.in_reply_to_status_id_str && <TweetInReplyTo tweet={tweet} />}
      <TweetBody tweet={tweet} />
      <TweetInfo tweet={tweet} />
      <TweetAction tweet={tweet} />
    </article>
  </div>
)

export default Tweet
