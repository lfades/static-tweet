import { Fragment } from 'react'
import Image from 'next/image'
import formatDistanceStrict from 'date-fns/formatDistanceStrict'
import s from './twitter.module.css'

export const TwitterLink = (p) => (
  <a
    className={s.link}
    href={p.href}
    target="_blank"
    rel="noopener noreferrer"
    title={p.title || p.href}
  >
    <b>{p.children}</b>
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

export const Emoji = (p) => (
  <span className={s.emoji}>
    <Image width={18} height={18} unoptimized {...p} />
  </span>
)

// Note: Poll data is most likely cached, so ongoing polls will not be updated
// until a revalidation happens
export const Poll = ({ data }) => {
  const votesCount = data.options.reduce(
    (count, option) => count + option.votes,
    0
  )
  const endsAt = new Date(data.endsAt)
  const now = new Date()

  return (
    <div className={s.poll}>
      <div className={s.options}>
        {data.options.map((option) => {
          const per = Math.round((option.votes / votesCount) * 100) || 0
          const width = per || 1 + '%'
          const widthLabel = per + '%'

          return (
            <Fragment key={option.position}>
              <span className={s.label}>{option.label}</span>
              <span className={s.chart} style={{ width }}></span>
              <span>{widthLabel}</span>
            </Fragment>
          )
        })}
      </div>
      <hr className={s.hr} />
      <div className={s.footer}>
        <span className={s['votes-count']}>{votesCount} votes</span>
        <span>
          {now > endsAt
            ? 'Final results'
            : `${formatDistanceStrict(endsAt, now)} left`}
        </span>
      </div>
    </div>
  )
}
