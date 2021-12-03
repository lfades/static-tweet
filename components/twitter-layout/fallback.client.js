import Link from 'next/link'
import cn from 'clsx'
import TweetSkeleton from './tweet-skeleton'
import A from '../landing/anchor'
import s from '../../styles/page.module.css'
import styles from './twitter.module.css'

export default function Fallback() {
  return (
    <div className={cn(s.page, styles.theme)}>
      <main className={s.main}>
        <TweetSkeleton />
      </main>
      <footer className={s.footer}>
        <p>
          🤯 This tweet was statically generated.{' '}
          <Link href="/" passHref>
            <A blank={false}>See how</A>
          </Link>
        </p>
      </footer>
    </div>
  )
}
