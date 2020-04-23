import Head from 'next/head';

export default function TweetMeta() {
  // TODO: Use real tweet metadata here
  return (
    <Head>
      <title>Static Tweet Next.js Demo</title>
      <meta
        name="description"
        content="Completely customizable static tweet for Next.js applications"
      />
      <meta property="og:title" content="Static Tweet Next.js Demo" />
      <meta property="og:site_name" content="Static Tweet Next.js Demo" />
      <meta
        property="og:description"
        content="Completely customizable static tweet for Next.js applications"
      />
      <meta property="og:image" content="/assets/twitter-card.png" />
      <meta name="twitter:card" content="summary_large_image" />
    </Head>
  );
}
