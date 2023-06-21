import type { ReactNode } from 'react'
import clsx from 'clsx'
import { A } from './landing/core'
import s from './tweet-page.module.css'

export const TweetPage = ({ children }: { children?: ReactNode }) => (
  <div data-theme="light">
    <div className={clsx(s.page, 'react-tweet-theme')}>
      <main className={s.main}>{children}</main>
      <footer className={s.footer}>
        <p>
          🤯 This tweet was statically generated. <A href="/">See how</A>
        </p>
      </footer>
    </div>
  </div>
)
