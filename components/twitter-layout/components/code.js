import cn from 'clsx'
import s from './code.module.css'

export const Code = (p) => (
  <code {...p} className={cn(s.code, s.inline, p.className)} />
)
