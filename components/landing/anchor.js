import { forwardRef } from 'react';
import styles from './anchor.module.css';

const A = forwardRef((p, ref) => (
  <a
    ref={ref}
    href={p.href}
    target="_blank"
    rel="noopener noreferrer"
    title={p.title || p.href}
    className={styles.anchor}
  >
    {p.children}&nbsp;&raquo;
  </a>
));

export default A;
