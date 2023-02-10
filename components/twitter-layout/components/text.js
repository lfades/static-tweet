import cn from 'clsx'
import s from './text.module.css'

export const P = (p) => <p className={s.p}>{p.children}</p>

export const Hr = (p) => <hr {...p} className={cn(s.hr, p.className)} />
