import Link from 'next/link'
import s from './anchor.module.css'

const A = ({ children, href, blank = true, onClick }, ref) => (
  <Link
    href={href}
    target={blank ? '_blank' : null}
    rel={blank ? 'noopener noreferrer' : null}
    className={s.root}
    onClick={onClick}
  >
    {blank ? <>{children}&nbsp;&raquo;</> : children}
  </Link>
)

export default A
