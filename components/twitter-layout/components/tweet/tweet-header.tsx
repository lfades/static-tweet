import Image from 'next/image'
import type { Tweet } from 'lib/twitter/api'
import s from './tweet-header.module.css'

export default function TweetHeader({ tweet }: { tweet: Tweet }) {
  const username = tweet.user.screen_name
  const url = `https://twitter.com/${username}`
  const avatar = tweet.user.profile_image_url_https

  return (
    <div className={s.header}>
      <a
        href={url}
        className={s.avatar}
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image src={avatar} alt={tweet.user.name} width={36} height={36} />
      </a>
      <a
        href={url}
        className={s.author}
        target="_blank"
        rel="noopener noreferrer"
      >
        <span className={s.name} title={tweet.user.name}>
          {tweet.user.name}
        </span>
        <span className={s.username} title={`@${username}`}>
          @{username}
        </span>
      </a>
      <a
        href={url}
        className={s.brand}
        target="_blank"
        rel="noopener noreferrer"
      >
        <div
          className={`icon ${s.twitterIcon}`}
          title="View on Twitter"
          role="img"
        />
      </a>
    </div>
  )
}
