import type { FC } from 'react'
import { useRouter } from 'next/router'
import clsx from 'clsx'
import type { Tweet as TweetType } from 'lib/twitter/api'
import TweetSkeleton from './twitter-layout/tweet-skeleton'
import TweetMeta from './tweet-meta'
import Tweet from './twitter-layout/components/tweet/tweet'
import A from './landing/anchor'
import styles from './tweet-page.module.css'

const TweetPage: FC<{ tweet: TweetType; className: string }> = ({
  tweet,
  className,
}) => {
  const { isFallback } = useRouter()

  return (
    <div className={clsx(styles.page, className)}>
      <TweetMeta />

      <main className={styles.main}>
        {isFallback ? <TweetSkeleton /> : <Tweet data={tweet} />}
      </main>

      <footer className={styles.footer}>
        <p>
          🤯 This tweet was statically generated.{' '}
          <A href="/" blank={false}>
            See how
          </A>
        </p>
      </footer>
    </div>
  )
}

export default TweetPage
