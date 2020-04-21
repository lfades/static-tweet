import { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import fetchTweetAst from '../lib/fetchTweetAst';
import Node from '../components/html/node';
import TweetSkeleton from '../components/twitter-layout/tweet-skeleton';
import components from '../components/twitter-layout/components';
import zeitTheme from '../components/zeit-layout/zeit.module.css';
import styles from '../landing.module.css';

const APP_URL = 'https://static-tweet.now.sh';
const P = components.p;
const Code = components.code;
const Ul = components.ul;
const Li = components.li;
const H2 = components.h2;
const Hr = components.hr;
const A = p => (
  <a
    href={p.href}
    target="_blank"
    rel="noopener noreferrer"
    title={p.title || p.href}
    className={styles.link}
  >
    {p.children} &raquo;
  </a>
);
const Tweet = ({ ast }) => <Node components={components} node={ast[0]} />;
const RandomTweet = ({ initialId }) => {
  const [{ id, loading, error }, setState] = useState({ id: initialId, loading: false });
  const fetchTweet = async e => {
    e.preventDefault();
    setState({ id, loading: true });

    const res = await fetch('/api/tweets');

    if (res.ok) {
      const { tweets } = await res.json();
      const randomId = tweets[Math.floor(Math.random() * tweets.length)];

      return setState({ id: randomId, loading: false });
    }

    const error = await getError(res);

    setState({ id, loading: false, error });
  };
  const href = `${APP_URL}/${id}`;

  return (
    <>
      <A href={href}>{href}</A>
      <div className={styles['generate-tweet']}>
        <button type="button" onClick={fetchTweet}>
          {loading ? (
            <i>⏱️ Fetching a random tweet</i>
          ) : (
            <>&#x21BA; Click here to get a random tweet</>
          )}
        </button>
        {error && <span>⚠️ Error: {error.message}. Please try again</span>}
      </div>
    </>
  );
};

async function getError(res) {
  if (res.headers.get('Content-Type').includes('application/json')) {
    const data = await res.json();
    return data.errors[0];
  }
  return { message: (await res.text()) || res.statusText };
}

export async function getStaticProps() {
  const url = 'https://twitter.com/zeithq/status/1249937011068129280';
  const tweet = await fetchTweetAst(url);

  return { props: { tweet } };
}

export default function Index({ tweet }) {
  return (
    <div className={`${styles.page} ${zeitTheme.zeit}`}>
      <main className={styles.main}>
        <article className={styles.article}>
          <header>
            <h1>Static Tweet Demo</h1>
          </header>
          <P>
            This demo shows off the next-gen Static Site Generation capabilities in Next.js. The
            following tweet:
          </P>
          <Tweet ast={tweet} />
          <P>
            was inlined into the HTML of this page (<Code className="inline">`pages/index.js`</Code>
            ) by using <Code className="inline">`getStaticProps`</Code> in your Next.js page (
            <A href="https://github.com/lfades/static-tweet/blob/master/pages/index.js">source</A>
            ).
          </P>
          <P>
            That means no Twitter embed <Code className="inline">`{`<iframe>`}`</Code>, no JS, no
            layout and scrolling jumps, no slowness, great SEO, great ligthouse scores:
          </P>
          <img src="/assets/lighthouse-score.png" alt="Very good lighthouse score" />
          <P>To see this in action, try statically rendering your very own tweet it:</P>
          <RandomTweet initialId="1250630175949086720" />
          <P>
            How is this possible? The deploy time for this project was{' '}
            <A href="/">
              <strong>30 seconds</strong>
            </A>
            . We couldn’t have possibly statically generated all tweets. Each day,{' '}
            <A href="/">500M tweets are added</A>!
          </P>
          <H2 data={{ id: 'incremental-static-generation' }}>Incremental Static Generation</H2>
          <P>
            When you visit{' '}
            <Code className="inline">
              `https://static-tweet.now.sh/<b>{`{tweetId}`}</b>`
            </Code>{' '}
            you’ll notice that if the tweet has never been rendered before, you’ll get a{' '}
            <strong>skeleton page</strong>.
          </P>
          <TweetSkeleton />
          <P>
            After you refresh that page, you’ll get the static HTML, no matter what edge in the{' '}
            <A href="/">global network</A> you are visiting.
          </P>
          <P>
            Because it’s static HTML, if Twitter disappears from the internet, you have strong
            guarantees of its high availability, backed by redundant storage.
          </P>
          <P>
            This is all enabled by a simple option: <Code className="inline">`fallback: true`</Code>{' '}
            in <Code className="inline">`getStaticPaths`</Code>. In this case, this is defined in
            the Next.js page called <Code className="inline">`pages/[tweet].js`</Code> (
            <A href="https://github.com/lfades/static-tweet/blob/master/pages/%5Btweet%5D.js">
              source
            </A>
            ).
          </P>
          <P>
            The <Code className="inline">`getStaticPaths`</Code> hook allows you to give Next.js the
            set of IDs you want to generate at <strong>build time</strong>.
          </P>
          <P>
            When you define a fallback, you get the power to continue lazily building pages{' '}
            <strong>at runtime as well</strong>. Unlike traditional Server Side Rendering (SSR), the
            initial request is always <strong>instant</strong> (the fallback itself is also static),
            you don’t worry about <strong>configuring caching</strong> and the work is only done{' '}
            <strong>once globally</strong>.
          </P>
          <Hr />
          <P>Resources:</P>
          <Ul>
            <Li>
              <A href="https://github.com/lfades/static-tweet/blob/master/pages/index.js">
                Source code
              </A>{' '}
              for this page
            </Li>
            <Li>
              <A href="https://nextjs.org/docs/basic-features/data-fetching">
                Next.js documentation
              </A>{' '}
              for `getStaticProps` and `getStaticPaths
            </Li>
            <Li>
              Get started{' '}
              <A href="https://nextjs.org/learn/basics/create-nextjs-app">
                learning Next.js from scratch
              </A>
            </Li>
          </Ul>
          <P>
            <strong>Author: Luis Alvarez</strong>
            <br />
            <A href="https://twitter.com/luis_fades">@luis_fades</A> – Next.js core contributor
          </P>
        </article>
      </main>
    </div>
  );
}
