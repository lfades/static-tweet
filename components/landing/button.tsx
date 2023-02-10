import type { ButtonHTMLAttributes, FC } from 'react'
import clsx from 'clsx'
import s from './button.module.css'
import { useTheme } from './page'

const Button: FC<ButtonHTMLAttributes<HTMLButtonElement>> = ({
  children,
  ...props
}) => {
  const [theme] = useTheme()
  return (
    <button
      type="button"
      className={clsx(s.root, theme === 'dark' && s.dark)}
      {...props}
    >
      {children}
    </button>
  )
}

export default Button
