import fetch from '../../lib/fetch';

const QUERY = 'javascript';
const LANG = 'en';

export default async function getTweets(req, res) {
  if (req.method !== 'GET') {
    res.setHeader('Allow', 'GET');
    return res.status(405).end();
  }

  if (!process.env.TWITTER_API_TOKEN) {
    return res.status(401).json({
      errors: [{ message: 'A Twitter API token is required to execute this request' }],
    });
  }

  const response = await fetch(
    `https://api.twitter.com/1.1/search/tweets.json?q=${QUERY}&lang=${LANG}&count=50`,
    {
      headers: {
        authorization: `Bearer ${process.env.TWITTER_API_TOKEN}`,
      },
    }
  );

  if (response.ok) {
    const { statuses } = await response.json();
    // Cache the Twitter response for 3 seconds, to avoid hitting the Twitter API limits
    // of 450 requests every 15 minutes (with app auth)
    res.setHeader('Cache-Control', 's-maxage=3, stale-while-revalidate');
    res.status(200).json({ tweets: statuses.map(tweet => tweet.id_str) });
  } else {
    res.status(400).json({
      errors: [{ message: `Fetch to the Twitter API failed with code: ${response.status}` }],
    });
  }
}
