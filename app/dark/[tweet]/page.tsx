import { NextTweet } from 'next-tweet'
import { getTweet } from 'next-tweet/api'
import { A } from '../../../components/landing/core'
import s from './page.module.css'

type Props = {
  params: { tweet: string }
}

export const revalidate = 60

export async function generateMetadata({ params }: Props) {
  const tweet = await getTweet(params.tweet).catch(() => undefined)

  if (!tweet) return { title: 'Next Tweet' }

  const username = ` - @${tweet.user.screen_name}`
  const maxLength = 68 - username.length
  const text =
    tweet.text.length > maxLength
      ? `${tweet.text.slice(0, maxLength)}…`
      : tweet.text

  return { title: `${text}${username}` }
}

const Page = async ({ params }: Props) => (
  <div className={s.root}>
    <main className={s.main}>
      {/* @ts-ignore: Async components are valid in the app directory */}
      <NextTweet id={params.tweet} priority />
    </main>
    <footer className={s.footer}>
      <p>
        🤯 This tweet was statically generated. <A href="/">See how</A>
      </p>
    </footer>
  </div>
)

export default Page
