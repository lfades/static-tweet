import { useRouter } from 'next/router'
import Link from 'next/link'
import cn from 'clsx'
import A from './landing/anchor'
import Node from './html/node'
import components from './twitter-layout/components'
import TweetSkeleton from './twitter-layout/tweet-skeleton'
import TweetMeta from './tweet-meta'
import styles from './tweet-page.module.css'
import Tweet from './twitter-layout/components/tweet/tweet'

export default function TweetPage({ ast, className }) {
  const { isFallback } = useRouter()

  return (
    <div className={cn(styles.page, className)}>
      <TweetMeta />

      <main className={styles.main}>
        {isFallback ? <TweetSkeleton /> : <Tweet data={ast} />}
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
