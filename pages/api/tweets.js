const QUERY = 'javascript'
const LANG = 'en'

export default async function getTweets(req, res) {
  if (req.method !== 'GET') {
    res.setHeader('Allow', 'GET')
    return res.status(405).end()
  }

  if (!process.env.TWITTER_API_TOKEN) {
    return res.status(401).json({
      errors: [
        { message: 'A Twitter API token is required to execute this request' },
      ],
    })
  }

  const response = await fetch(
    `https://api.twitter.com/2/tweets/search/recent?query=${QUERY}&max_results=30`,
    {
      headers: {
        Authorization: `Bearer ${process.env.TWITTER_API_TOKEN}`,
      },
    }
  )

  if (response.ok) {
    const { data } = await response.json()
    // Cache the Twitter response for 1 hour, to avoid hitting Twitter API limits
    res.setHeader('Cache-Control', 's-maxage=3600, stale-while-revalidate')
    res.status(200).json({ tweets: data.map((tweet) => tweet.id) })
  } else {
    res.status(400).json({
      errors: [
        {
          message: `Fetch to the Twitter API failed with code: ${response.status}`,
        },
      ],
    })
  }
}
