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
        <div className={s.avatarOverflow}>
          <Image src={avatar} alt={tweet.user.name} width={48} height={48} />
        </div>
        <div className={s.avatarOverflow}>
          <div className={s.avatarShadow}></div>
        </div>
      </a>
      <div className={s.author}>
        <a
          href={url}
          className={s.authorLink}
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className={s.authorLinkText}>
            <span className={s.name} title={tweet.user.name}>
              {tweet.user.name}
            </span>
          </div>
          <div className={s.authorVerified}>
            <svg
              viewBox="0 0 24 24"
              aria-label="Verified account"
              role="img"
              className={s.authorVerifiedIcon}
            >
              <g>
                <path d="M22.25 12c0-1.43-.88-2.67-2.19-3.34.46-1.39.2-2.9-.81-3.91s-2.52-1.27-3.91-.81c-.66-1.31-1.91-2.19-3.34-2.19s-2.67.88-3.33 2.19c-1.4-.46-2.91-.2-3.92.81s-1.26 2.52-.8 3.91c-1.31.67-2.2 1.91-2.2 3.34s.89 2.67 2.2 3.34c-.46 1.39-.21 2.9.8 3.91s2.52 1.26 3.91.81c.67 1.31 1.91 2.19 3.34 2.19s2.68-.88 3.34-2.19c1.39.45 2.9.2 3.91-.81s1.27-2.52.81-3.91c1.31-.67 2.19-1.91 2.19-3.34zm-11.71 4.2L6.8 12.46l1.41-1.42 2.26 2.26 4.8-5.23 1.47 1.36-6.2 6.77z"></path>
              </g>
            </svg>
          </div>
        </a>
        <div className={s.authorMeta}>
          <a
            href={url}
            className={s.username}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span title={`@${username}`}>@{username}</span>
          </a>
          <div className={s.authorFollow}>
            <span className={s.separator}>·</span>
            <a
              href={url}
              className={s.follow}
              target="_blank"
              rel="noopener noreferrer"
            >
              Follow
            </a>
          </div>
        </div>
      </div>

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
