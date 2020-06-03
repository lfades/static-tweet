import fetchTweetAst from '../lib/fetchTweetAst';
import components from '../components/twitter-layout/components';
import Page from '../components/landing/page';
import A from '../components/landing/anchor';
import Tweet from '../components/landing/tweet';
import RandomTweet from '../components/landing/random-tweet';
import { Score, Gauge } from '../components/landing/lighthouse-score';

const P = components.p;
const Code = components.code;
const Ul = components.ul;
const Li = components.li;
const H2 = components.h2;
const Hr = components.hr;

export async function getStaticProps() {
  const tweet = await fetchTweetAst('1249937011068129280');

  return { props: { tweet } };
}

export default function Index({ tweet }) {
  return (
    <Page
      title="Static Tweet Next.js Demo"
      description="A demo showing off ahead-of-time and incremental static generation by using Tweets as the datasource"
    >
      <P>
        This demo shows off the next-gen Static Site Generation capabilities in Next.js. The
        following tweet:
      </P>
      <Tweet ast={tweet} />
      <P>
        was inlined into the HTML of this page (<Code className="inline">`pages/index.js`</Code>) by
        using <Code className="inline">`getStaticProps`</Code> in your Next.js page (
        <A href="https://github.com/lfades/static-tweet/blob/master/pages/index.js">source</A>
        ).
      </P>
      <P>
        That means no Twitter embed <Code className="inline">`{`<iframe>`}`</Code>, no JS, no layout
        and scrolling jumps, no slowness, great SEO, great lighthouse scores:
      </P>
      <Score>
        <Gauge score={98} text="Performance" />
        <Gauge score={93} text="Accessibility" />
        <Gauge score={100} text="Best Practices" />
        <Gauge score={100} text="SEO" />
      </Score>
      <P>To see this in action, try statically rendering your very own tweet it:</P>
      <RandomTweet initialId="1253411282608205826" />
      <P>
        How is this possible? The deploy time for this project was <strong>30 seconds</strong>. We
        couldn’t have possibly statically generated all tweets. Each day,{' '}
        <A href="https://blog.twitter.com/engineering/en_us/a/2013/new-tweets-per-second-record-and-how.html">
          500M tweets are added
        </A>
        !
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
      <Tweet skeleton />
      <P>
        After you refresh that page, you’ll get the static HTML, no matter what edge in the{' '}
        <A href="https://vercel.com/edge-network">global network</A> you are visiting.
      </P>
      <P>
        Because it’s static HTML, if Twitter disappears from the internet, you have strong
        guarantees of its high availability, backed by redundant storage.
      </P>
      <P>
        This is all enabled by a simple option: <Code className="inline">`fallback: true`</Code> in{' '}
        <Code className="inline">`getStaticPaths`</Code>. In this case, this is defined in the
        Next.js page called <Code className="inline">`pages/[tweet].js`</Code> (
        <A href="https://github.com/lfades/static-tweet/blob/master/pages/%5Btweet%5D.js">source</A>
        ).
      </P>
      <P>
        The <Code className="inline">`getStaticPaths`</Code> hook allows you to give Next.js the set
        of IDs you want to generate at <strong>build time</strong>.
      </P>
      <P>
        When you define a fallback, you get the power to continue lazily building pages{' '}
        <strong>at runtime as well</strong>. Unlike traditional Server Side Rendering (SSR), the
        initial request is always <strong>instant</strong> (the fallback itself is also static), you
        don’t worry about <strong>configuring caching</strong> and the work is only done{' '}
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
          <A href="https://nextjs.org/docs/basic-features/data-fetching">Next.js documentation</A>{' '}
          for <Code className="inline">`getStaticProps`</Code> and{' '}
          <Code className="inline">`getStaticPaths`</Code>
        </Li>
        <Li>
          Learn about our RFC for{' '}
          <A href="https://github.com/zeit/next.js/discussions/11552">
            incrementally updating existing pages
          </A>
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
    </Page>
  );
}
