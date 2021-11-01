import cn from 'clsx'
import s from './headings.module.css'

const Permalink = ({ children, id }) => (
  <>
    <span id={id} className={s.id}></span>
    <a href={`#${id}`} className={s.link}>
      {children}
    </a>
    <span className={s.permalink}>#</span>
  </>
)

export const H1 = (p) => (
  <h1 className={cn(s.heading, s.h1)}>
    <Permalink id={p.data.id}>{p.children}</Permalink>
  </h1>
)

export const H2 = (p) => (
  <h2 className={cn(s.heading, s.h2)}>
    <Permalink id={p.data.id}>{p.children}</Permalink>
  </h2>
)

export const H3 = (p) => (
  <h3 className={cn(s.heading, s.h3)}>
    <Permalink id={p.data.id}>{p.children}</Permalink>
  </h3>
)

export const H4 = (p) => (
  <h4 className={cn(s.heading, s.h4)}>
    <Permalink id={p.data.id}>{p.children}</Permalink>
  </h4>
)

export const H5 = (p) => (
  <h5 className={cn(s.heading, s.h5)}>
    <Permalink id={p.data.id}>{p.children}</Permalink>
  </h5>
)

export const H6 = (p) => (
  <h6 className={cn(s.heading, s.h6)}>
    <Permalink id={p.data.id}>{p.children}</Permalink>
  </h6>
)
