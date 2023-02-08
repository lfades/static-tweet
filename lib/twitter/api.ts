const API_URL = 'https://api.twitter.com'
const SYNDICATION_URL = 'https://cdn.syndication.twimg.com'

export type Indices = [number, number]

interface HashTag {
  indices: Indices
  text: string
}

interface UserMention {
  id_str: string
  indices: Indices
  name: string
  screen_name: string
}

interface TweetEntities {
  hashtags: HashTag[]
  urls: { url: string; expanded_url: string }[]
  user_mentions: UserMention[]
  symbols: { text: string }[]
}

interface TweetUser {
  id_str: string
  name: string
  profile_image_url_https: string
  screen_name: string
  verified: boolean
  is_blue_verified: boolean
}

interface TweetEditControl {
  edit_tweet_ids: string[]
  editable_until_msecs: string
  is_edit_eligible: boolean
  edits_remaining: string
}

interface TweetBase {
  lang: string
  created_at: string
  display_text_range: Indices
  entities: TweetEntities
  id_str: string
  text: string
  user: TweetUser
  edit_control: TweetEditControl
  isEdited: boolean
  isStaleEdit: boolean
}

interface QuotedTweet extends TweetBase {
  reply_count: number
  retweet_count: number
  favorite_count: number
  self_thread: {
    id_str: string
  }
}

interface TweetParent extends TweetBase {
  reply_count: number
  retweet_count: number
  favorite_count: number
}

export interface Tweet extends TweetBase {
  __typename: 'Tweet'
  favorite_count: number
  conversation_count: number
  news_action_type: 'conversation'
  quoted_tweet?: QuotedTweet
  in_reply_to_screen_name?: string
  in_reply_to_status_id_str?: string
  in_reply_to_user_id_str?: string
  parent?: TweetParent
}

function twitterLabsEnabled(expansions: any) {
  if (process.env.TWITTER_LABS_ENABLED !== 'true') return false
  if (!expansions) return true

  const exp = process.env.TWITTER_LABS_EXPANSIONS || ''

  return exp.includes(expansions)
}

export async function fetchTweet(id: string): Promise<Tweet | undefined> {
  const res = await fetch(`${SYNDICATION_URL}/tweet-result?id=${id}&lang=en`)

  console.log(
    'LOG',
    `${SYNDICATION_URL}/tweet-result?id=${id}&lang=en`,
    res.status,
    Object.fromEntries(res.headers.entries())
  )

  if (res.ok) return res.json()
  if (res.status === 404) {
    console.log('JSON', await res.json())
    return
  }

  throw new Error(
    `Fetch for the embedded tweets of "${id}" failed with code: ${res.status}`
  )
}

export async function fetchUserStatus(tweetId: string) {
  // If there isn't an API token don't do anything, this is only required for videos.
  if (!process.env.TWITTER_API_TOKEN) return

  const res = await fetch(
    `${API_URL}/1.1/statuses/show/${tweetId}.json?include_entities=true&tweet_mode=extended`,
    {
      headers: {
        authorization: `Bearer ${process.env.TWITTER_API_TOKEN}`,
      },
    }
  )

  console.log(
    'Twitter x-rate-limit-limit:',
    res.headers.get('x-rate-limit-limit')
  )
  console.log(
    'Twitter x-rate-limit-remaining:',
    res.headers.get('x-rate-limit-remaining')
  )
  console.log(
    'Twitter x-rate-limit-reset:',
    res.headers.get('x-rate-limit-reset')
  )

  if (res.ok) return res.json()
  if (res.status === 404) return

  throw new Error(`Fetch to the Twitter API failed with code: ${res.status}`)
}

export async function fetchTweetWithPoll(tweetId: string) {
  const expansions = 'attachments.poll_ids'

  // If there isn't an API token or Twitter Labs is not enabled, don't do anything,
  // this is only required for Polls.
  if (!process.env.TWITTER_API_TOKEN || !twitterLabsEnabled(expansions)) return

  const res = await fetch(
    `${API_URL}/labs/1/tweets?format=compact&expansions=${expansions}&ids=${tweetId}`,
    {
      headers: {
        authorization: `Bearer ${process.env.TWITTER_API_TOKEN}`,
      },
    }
  )

  console.log(
    'Twitter Labs x-rate-limit-limit:',
    res.headers.get('x-rate-limit-limit')
  )
  console.log(
    'Twitter Labs x-rate-limit-remaining:',
    res.headers.get('x-rate-limit-remaining')
  )
  console.log(
    'Twitter Labs x-rate-limit-reset:',
    res.headers.get('x-rate-limit-reset')
  )

  if (res.ok) return res.json()
  if (res.status === 404) return

  throw new Error(
    `Fetch to the Twitter Labs API failed with code: ${res.status}`
  )
}

export async function getEmbeddedTweetHtml(url) {
  const res = await fetch(`https://publish.twitter.com/oembed?url=${url}`)

  if (res.ok) return res.json()
  if (res.status === 404) return

  throw new Error(`Fetch for embedded tweet failed with code: ${res.status}`)
}
