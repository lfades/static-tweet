import Link from 'next/link'
import { useRouter } from 'next/router'
import fetchTweetAst from '../../lib/fetchTweetAst'
import A from '../../components/landing/anchor'
import Node from '../../components/html/node'
import TweetSkeleton from '../../components/twitter-layout/tweet-skeleton'
import components from '../../components/twitter-layout/components'
import styles from '../../components/twitter-layout/twitter.module.css'
import TweetMeta from '../../components/tweet-meta'
import Fallback from '../../components/twitter-layout/fallback'
import Tweet from '../../components/twitter-layout/tweet'

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

export default function TweetPage({ date, ast }) {
  const { isFallback } = useRouter()
  return isFallback ? <Fallback /> : <Tweet data={ast} />
}
