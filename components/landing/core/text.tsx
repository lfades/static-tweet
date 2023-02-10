import type { FC, ReactNode } from 'react'
import s from './text.module.css'

export const P: FC<{ children: ReactNode }> = ({ children }) => (
  <p className={s.p}>{children}</p>
)

export const Hr = () => <hr className={s.hr} />
