import type { FC, ReactNode } from 'react'
import clsx from 'clsx'
import s from './headings.module.css'

type Props = {
  id: string
  children: ReactNode
}

const Permalink: FC<Props> = ({ children, id }) => (
  <>
    <span id={id} className={s.id}></span>
    <a href={`#${id}`} className={s.link}>
      {children}
    </a>
    <span className={s.permalink}>#</span>
  </>
)

export const H1: FC<Props> = ({ id, children }) => (
  <h1 className={clsx(s.heading, s.h1)}>
    <Permalink id={id}>{children}</Permalink>
  </h1>
)

export const H2: FC<Props> = ({ id, children }) => (
  <h2 className={clsx(s.heading, s.h2)}>
    <Permalink id={id}>{children}</Permalink>
  </h2>
)

export const H3: FC<Props> = ({ id, children }) => (
  <h3 className={clsx(s.heading, s.h3)}>
    <Permalink id={id}>{children}</Permalink>
  </h3>
)

export const H4: FC<Props> = ({ id, children }) => (
  <h4 className={clsx(s.heading, s.h4)}>
    <Permalink id={id}>{children}</Permalink>
  </h4>
)

export const H5: FC<Props> = ({ id, children }) => (
  <h5 className={clsx(s.heading, s.h5)}>
    <Permalink id={id}>{children}</Permalink>
  </h5>
)

export const H6: FC<Props> = ({ id, children }) => (
  <h6 className={clsx(s.heading, s.h6)}>
    <Permalink id={id}>{children}</Permalink>
  </h6>
)
