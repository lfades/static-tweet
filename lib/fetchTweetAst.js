import GithubSlugger from 'github-slugger'
import { fetchTweet } from './twitter/api'
import { parseTweet } from './twitter/embed/tweet-html'
import getTweetHtml from './twitter/getTweetHtml'
import htmlToAst from './markdown/htmlToAst'

class Context {
  slugger = new GithubSlugger()
  map = []
  get(id) {
    return this.map[Number(id)]
  }
  add(data, nodes) {
    return this.map.push({ data, nodes }) - 1
  }
}

export default async function fetchTweetAst(tweetId) {
  const tweet = await fetchTweet(tweetId)
  // const tweet = tweetData && parseTweet(tweetData)
  return tweet

  // const context = new Context()
  // const html = await getTweetHtml(tweet, context)
  // const ast = await htmlToAst(html, context)
}
