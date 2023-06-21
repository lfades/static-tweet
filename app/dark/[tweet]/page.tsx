import { Tweet } from 'react-tweet'
import { getTweet } from 'react-tweet/api'
import clsx from 'clsx'
import { A } from 'components/landing/core'
import { components } from 'components/tweet-components'
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
  <div data-theme="dark" className={clsx(s.root, 'react-tweet-theme')}>
    <main className={s.main}>
      <Tweet id={params.tweet} components={components} />
    </main>
    <footer className={s.footer}>
      <p>
        🤯 This tweet was statically generated. <A href="/">See how</A>
      </p>
    </footer>
  </div>
)

export default Page
