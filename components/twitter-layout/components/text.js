import cn from 'clsx';
import s from './text.module.css';

export const P = p => <p className={s.p}>{p.children}</p>;

export const Blockquote = p => <blockquote {...p} className={cn(c.blockquote, p.className)} />;

export const Hr = p => <hr {...p} className={cn(c.hr, p.className)} />;
