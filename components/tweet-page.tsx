import type { FC } from 'react'
import { useRouter } from 'next/router'
import { EmbeddedTweet, TweetSkeleton } from 'next-tweet'
import type { Tweet } from 'next-tweet/api'
import TweetMeta from './tweet-meta'
import { A } from './landing/core'
import s from './tweet-page.module.css'

const TweetPage: FC<{ tweet: Tweet }> = ({ tweet }) => {
  const { isFallback } = useRouter()

  return (
    <div className={s.page} data-theme="light">
      <TweetMeta />

      <main className={s.main}>
        {isFallback ? (
          <TweetSkeleton />
        ) : (
          <EmbeddedTweet tweet={tweet} priority />
        )}
      </main>

      <footer className={s.footer}>
        <p>
          🤯 This tweet was statically generated. <A href="/">See how</A>
        </p>
      </footer>
    </div>
  )
}

export default TweetPage
