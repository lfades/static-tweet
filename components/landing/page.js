import React from 'react';
import Head from 'next/head';
import twitterTheme from '../twitter-layout/twitter.module.css';
import darkTheme from '../dark-layout/dark.module.css';
import styles from './page.module.css';

const Theme = React.createContext();

export const useTheme = () => React.useContext(Theme);

export function ThemeProvider({ theme, children }) {
  const [val, setTheme] = React.useState(theme);
  return <Theme.Provider value={[val, setTheme]}>{children}</Theme.Provider>;
}

function PageContent({ title, children }) {
  const [theme] = useTheme();
  return (
    <div
      className={`${styles.page} ${theme === 'light' ? twitterTheme.theme : darkTheme.theme} ${
        styles.theme
      }`}
    >
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

export default function Page({ children, title, description }) {
  return (
    <ThemeProvider theme="light">
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta property="og:title" content={title} />
        <meta property="og:site_name" content="Static Tweet Next.js Demo" />
        <meta property="og:description" content={description} />
        <meta property="og:image" content="https://static-tweet.now.sh/assets/twitter-card.png" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <PageContent title={title}>{children}</PageContent>
    </ThemeProvider>
  );
}
