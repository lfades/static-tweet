import type { FC } from 'react'
import Image from 'next/image'
import clsx from 'clsx'
import type { Tweet } from 'lib/twitter/api'
import { getMediaUrl, getTweetUrl } from 'lib/twitter/utils'
import s from './tweet-media.module.css'

const TweetMedia: FC<{ tweet: Tweet }> = ({ tweet }) => {
  const length = tweet.mediaDetails?.length ?? 0

  return (
    <div className={s.root}>
      <div className={s.skeleton} />
      <div
        className={clsx(
          s.mediaWrapper,
          length > 1 && s.grid2Columns,
          length === 3 && s.grid3,
          length > 4 && s.grid2x2
        )}
      >
        {tweet.mediaDetails?.map((media) => (
          <a
            key={media.media_url_https}
            href={getTweetUrl(tweet)}
            className={s.mediaLink}
            target="_blank"
            rel="noopener noreferrer"
          >
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
    </div>
  )
}

export default TweetMedia
