import type { FC, ReactNode } from 'react'
import Link, { type LinkProps } from 'next/link'
import s from './anchor.module.css'

type Props = LinkProps & { children: ReactNode; blank?: boolean }

export const A: FC<Props> = ({ children, href, blank, ...props }) => (
  <Link
    href={href}
    target={blank ? '_blank' : undefined}
    rel={blank ? 'noopener noreferrer' : undefined}
    className={s.root}
    {...props}
  >
    {blank ? <>{children}&nbsp;&raquo;</> : children}
  </Link>
)
