import { Fragment } from 'react'
import Image from 'next/image'
import formatDistanceStrict from 'date-fns/formatDistanceStrict'
import s from './twitter.module.css'

export const TwitterLink = (p) => (
  <a className={s.link} href={p.href} target="_blank" rel="noopener noreferrer">
    {p.children}
  </a>
)

export const Mention = (p) => (
  <TwitterLink href={p.href}>{p.children}</TwitterLink>
)

export const Hashtag = (p) => (
  <TwitterLink href={p.href}>{p.children}</TwitterLink>
)

export const Cashtag = (p) => (
  <TwitterLink href={p.href} type="$">
    {p.children[0].replace(/^\$/, '')}
  </TwitterLink>
)
