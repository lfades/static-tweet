import Link from 'next/link';
import Error from 'next/error';
import { useRouter } from 'next/router';
import fetchTweetAst from '../lib/fetchTweetAst';
import components from '../components/tweet-page/components';
import TweetSkeleton from '../components/tweet-page/tweet-skeleton';
import Node from '../components/html/node';

// Regex to test a valid username, you should also test for a max length of 15, but we're not using
// the user to get the tweet
// const USERNAME = /^[a-zA-Z0-9_]+$/;
const TWEET_ID = /^[0-9]+$/;

export async function getStaticPaths() {
  return { paths: [], fallback: true };
}

export async function getStaticProps({ params }) {
  const { tweet } = params;

  if (tweet.length > 40 || !TWEET_ID.test(tweet)) {
    return { props: {} };
  }

  const url = `https://twitter.com/_/status/${tweet}`;
  const ast = await fetchTweetAst(url);

  return ast ? { props: { ast } } : {};
}

export default function Tweet({ date, ast }) {
  const { isFallback } = useRouter();

  if (!isFallback && !ast) {
    return <Error statusCode={404} />;
  }

  return (
    <div className="page">
      {isFallback ? <TweetSkeleton /> : <Node components={components} node={ast[0]} />}

      <style jsx>{`
        .page {
          width: 500px;
          max-width: 100%;
          margin: 0 auto;
          padding: 2rem 0;
        }
      `}</style>
    </div>
  );
}
