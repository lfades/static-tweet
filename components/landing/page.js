import Head from 'next/head';
import twitterTheme from '../twitter-layout/twitter.module.css';
import styles from './page.module.css';

export default function Page({ children, title, description }) {
  return (
    <div className={`${styles.page} ${twitterTheme.twitter}`}>
      <Head>
        <title>{title}</title>
        <meta name="Description" content={description} />
      </Head>

      <main className={styles.main}>
        <article className={styles.article}>
          <header>
            <h1>{title}</h1>
          </header>
          {children}
        </article>
      </main>
    </div>
  );
}
