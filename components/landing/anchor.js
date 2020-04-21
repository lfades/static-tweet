import { forwardRef } from 'react';
import styles from './anchor.module.css';

const A = forwardRef(({ children, href, title, blank = true }, ref) => (
  <a
    ref={ref}
    href={href}
    target={blank ? '_blank' : null}
    rel={blank ? 'noopener noreferrer' : null}
    title={title || href}
    className={styles.anchor}
  >
    {blank ? <>{children}&nbsp;&raquo;</> : children}
  </a>
));

export default A;
