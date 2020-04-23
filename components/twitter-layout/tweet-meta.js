import Head from 'next/head';

export default function TweetMeta() {
  // TODO: Use real tweet metadata here
  return (
    <Head>
      <title>Static Tweet Next.js Demo</title>
      <meta
        name="description"
        content="A demo showing off ahead-of-time and incremental static generation by using Tweets as the datasource"
      />
      <meta property="og:title" content="Static Tweet Next.js Demo" />
      <meta property="og:site_name" content="Static Tweet Next.js Demo" />
      <meta
        property="og:description"
        content="A demo showing off ahead-of-time and incremental static generation by using Tweets as the datasource"
      />
      <meta property="og:image" content="/assets/twitter-card.png" />
      <meta name="twitter:card" content="summary_large_image" />
    </Head>
  );
}
