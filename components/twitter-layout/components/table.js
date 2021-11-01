import cn from 'clsx';
import s from './table.module.css';

export const Table = p => (
  <div className={s['table-container']}>
    <table {...p} className={cn(s.table, p.className)} />
  </div>
);

export const Th = p => <th {...p} className={cn(s.th, p.className)} />;

export const Td = p => <td {...p} className={cn(s.td, p.className)} />;
