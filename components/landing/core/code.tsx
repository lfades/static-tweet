import type { FC, ReactNode } from 'react'
import cn from 'clsx'
import s from './code.module.css'

export const Code: FC<{ children: ReactNode; inline?: boolean }> = ({
  children,
  inline = true,
}) => <code className={cn(s.root, inline && s.inline)}>{children}</code>
