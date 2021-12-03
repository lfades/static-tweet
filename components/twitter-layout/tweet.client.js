import Link from 'next/link'
import cn from 'clsx'
import Node from '../html/node'
import A from '../landing/anchor'
import s from '../../styles/page.module.css'
import components from './components'
import TweetMeta from '../tweet-meta'
import styles from './twitter.module.css'

export default function Tweet({ data }) {
  return (
    <div className={cn(s.page, styles.theme)}>
      <TweetMeta />
      <main className={s.main}>
        <Node components={components} node={data[0]} />
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
