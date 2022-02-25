import { Suspense } from 'react'
import useData from '../lib/use-data'
import fetchTweetAst from '../lib/fetchTweetAst'
import Node from '../components/html/node'
import Fallback from '../components/twitter-layout/fallback.client'
import Tweet from '../components/twitter-layout/tweet.client'

// Regex to test a valid username, you should also test for a max length of 15, but we're not using
// the user to get the tweet
const USERNAME = /^[a-zA-Z0-9_]+$/
const TWEET_ID = /^[0-9]+$/

// export async function getStaticPaths() {
//   return { paths: [], fallback: true }
// }

// export async function getStaticProps({ params }) {
//   console.log('Ey!')
//   const { tweet } = params

//   if (tweet.length > 40 || !TWEET_ID.test(tweet)) {
//     return { notFound: true }
//   }

//   try {
//     const ast = await fetchTweetAst(tweet)
//     return ast ? { props: { ast } } : { notFound: true }
//   } catch (error) {
//     // The Twitter API most likely died
//     console.error(error)
//     return { notFound: true }
//   }
// }

function TweetWithData() {
  // const data = useData('1249937011068129280', () =>
  //   fetchTweetAst('1249937011068129280')
  // )

  return <Tweet data={data} />
}

export default function TweetPage(x) {
  return (
    <Suspense fallback={<Fallback />}>
      <Fallback />
    </Suspense>
  )
}
