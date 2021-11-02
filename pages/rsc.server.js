// import fetchTweetAst from '../lib/fetchTweetAst'
import Tweet from '../components/landing/tweet.server'

// export async function getStaticProps() {
//   const tweet = await fetchTweetAst('1249937011068129280')

//   return { props: { tweet } }
// }

export default function Index({ tweet }) {
  console.log('EY TEST', tweet)
  return <Tweet ast={tweet} />
}
