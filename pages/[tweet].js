import fetchTweetAst from '../lib/fetchTweetAst'
import TweetPage from '../components/tweet-page'
import styles from '../components/twitter-layout/twitter.module.css'

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

export default function Page({ date, ast }) {
  return <TweetPage className={styles.theme} ast={ast} />
}
