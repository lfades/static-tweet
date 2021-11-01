import Link from 'next/link'
import { useRouter } from 'next/router'
import cn from 'clsx'
import fetchTweetAst from '../lib/fetchTweetAst'
import A from '../components/landing/anchor'
import Node from '../components/html/node'
import TweetSkeleton from '../components/twitter-layout/tweet-skeleton'
import components from '../components/twitter-layout/components'
import styles from '../components/dark-layout/dark.module.css'
import TweetMeta from '../components/tweet-meta'
import s from '../styles/page.module.css'

// Regex to test a valid username, you should also test for a max length of 15, but we're not using
// the user to get the tweet
// const USERNAME = /^[a-zA-Z0-9_]+$/;
const TWEET_ID = /^[0-9]+$/

export async function getStaticPaths() {
  return { paths: [], fallback: true }
}

export async function getStaticProps({ params }) {
  const { tweet } = params

  if (tweet.length > 40 || !TWEET_ID.test(tweet)) {
    return { notFound: true }
  }

  try {
    const ast = await fetchTweetAst(tweet)
    return ast ? { props: { ast } } : { notFound: true }
  } catch (error) {
    // The Twitter API most likely died
    console.error(error)
    return { notFound: true }
  }
}

export default function Tweet({ date, ast }) {
  const { isFallback } = useRouter()

  return (
    <div className={cn(s.page, styles.theme)}>
      <TweetMeta />

      <main className={s.main}>
        {isFallback ? (
          <TweetSkeleton />
        ) : (
          <Node components={components} node={ast[0]} />
        )}

        <footer className={s.footer}>
          <p>
            {isFallback
              ? '🤯 This tweet is statically generating.'
              : '🤯 This tweet was statically generated.'}{' '}
            <Link href="/" passHref>
              <A blank={false}>See how</A>
            </Link>
          </p>
        </footer>
      </main>
    </div>
  )
}
