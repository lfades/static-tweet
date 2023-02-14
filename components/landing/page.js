import React from 'react'
import Head from 'next/head'
import clsx from 'clsx'
import landingTheme from '../landing/theme.module.css'
import s from './page.module.css'

const Theme = React.createContext()

export const useTheme = () => React.useContext(Theme)

export function ThemeProvider({ theme, children }) {
  const [val, setTheme] = React.useState(theme)
  return <Theme.Provider value={[val, setTheme]}>{children}</Theme.Provider>
}

function PageContent({ title, children }) {
  const [theme] = useTheme()
  return (
    <div
      className={clsx(
        s.page,
        landingTheme.theme,
        theme === 'light' ? [landingTheme.light] : [landingTheme.dark]
      )}
      data-theme={theme === 'light' ? 'light' : 'dark'}
    >
      <main className={s.main}>
        <article className={s.article}>
          <header>
            <h1>{title}</h1>
          </header>
          {children}
        </article>
      </main>
    </div>
  )
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
        <meta
          property="og:image"
          content="https://static-tweet.vercel.app/assets/twitter-card.png"
        />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <PageContent title={title}>{children}</PageContent>
    </ThemeProvider>
  )
}
