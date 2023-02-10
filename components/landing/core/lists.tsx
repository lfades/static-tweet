import type { FC, ReactNode } from 'react'
import s from './lists.module.css'

export const Ul: FC<{ children: ReactNode }> = ({ children }) => (
  <ul className={s.ul}>{children}</ul>
)

export const Li: FC<{ children: ReactNode }> = ({ children }) => (
  <li className={s.li}>{children}</li>
)
