import type { FC, ReactNode } from 'react'
import '../styles/base.css'

const RootLayout: FC<{ children: ReactNode }> = ({ children }) => (
  <html>
    <head />
    <body data-theme="dark">{children}</body>
  </html>
)

export default RootLayout
