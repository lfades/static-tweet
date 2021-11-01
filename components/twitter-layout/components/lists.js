import cn from 'clsx';
import s from './lists.module.css';

export const Ul = p => <ul {...p} className={cn(p.className, s.ul)} />;

export const Ol = p => <ol {...p} className={cn(p.className, s.ol)} />;

export const Li = p => <li {...p} className={cn(p.className, s.li)} />;
