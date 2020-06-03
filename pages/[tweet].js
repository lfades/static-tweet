import Link from 'next/link';
import Error from 'next/error';
import { useRouter } from 'next/router';
import fetchTweetAst from '../lib/fetchTweetAst';
import A from '../components/landing/anchor';
import Node from '../components/html/node';
import TweetSkeleton from '../components/twitter-layout/tweet-skeleton';
import components from '../components/twitter-layout/components';
import styles from '../components/dark-layout/dark.module.css';
import TweetMeta from '../components/tweet-meta';

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

  try {
    const ast = await fetchTweetAst(tweet);
    return { props: ast ? { ast } : {} };
  } catch (error) {
    // The Twitter API most likely died
    console.error(error);
    return { props: {} };
  }
}

export default function Tweet({ date, ast }) {
  const { isFallback } = useRouter();

  if (!isFallback && !ast) {
    return <Error statusCode={404} title="This tweet could not be found" />;
  }

  return (
    <div className={`page-wrapper ${styles.theme}`}>
      <TweetMeta />

      <main>
        {isFallback ? <TweetSkeleton /> : <Node components={components} node={ast[0]} />}

        <footer>
          <p>
            {isFallback
              ? '🤯 This tweet is statically generating.'
              : '🤯 This tweet was statically generated.'}{' '}
            <Link href="/" passHref>
              <A blank={false}>See how</A>
            </Link>
          </p>
        </footer>
      </main>

      <style jsx>{`
        .page-wrapper {
          color: var(--tweet-font-color);
          background: var(--bg-color);
          height: 100vh;
          overflow: auto;
          padding: 2rem 1rem;
        }
        main {
          width: 500px;
          max-width: 100%;
          margin: 0 auto;
        }
        footer {
          font-size: 0.875rem;
          text-align: center;
          margin-top: -0.5rem;
        }
      `}</style>
    </div>
  );
}
