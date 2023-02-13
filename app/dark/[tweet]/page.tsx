import { NextTweet } from 'next-tweet'
import clsx from 'clsx'
import theme from 'next-tweet/theme.module.css'
import s from './page.module.css'

export const revalidate = 60

export default async function Page({ params }: { params: { tweet: string } }) {
  // TODO: Figure out why Next.js sends this value at build time
  if (params.tweet === '%5Btweet%5D') return null

  return (
    <div className={clsx(s.root, theme.dark)}>
      <main className={s.main}>
        {/* @ts-ignore: Async components are valid in the app directory */}
        <NextTweet id={params.tweet} priority />
      </main>
      <footer className={s.footer}>
        <p>🤯 This tweet was statically generated.</p>
      </footer>
    </div>
  )
}
