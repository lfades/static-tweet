import type { FC } from 'react'
import Image from 'next/image'
import type { Tweet } from 'lib/twitter/api'
import { getMediaUrl, getTweetUrl } from 'lib/twitter/utils'
import s from './tweet-media.module.css'

const TweetMedia: FC<{ tweet: Tweet }> = ({ tweet }) => (
  <div className={s.root}>
    {tweet.mediaDetails?.map((media) => (
      <a
        key={media.display_url}
        href={getTweetUrl(tweet)}
        className={s.media}
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className={s.skeleton}></div>
        <Image
          src={getMediaUrl(media, 'small')}
          className={s.image}
          alt="Image"
          fill
          draggable
          unoptimized
        />
      </a>
    ))}
  </div>
)

export default TweetMedia
