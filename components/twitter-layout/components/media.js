import dynamic from 'next/dynamic';
import Image from 'next/image';
import cn from 'clsx';
import s from './media.module.css';

const LoadDetailsDialog = dynamic(() => import('../details-dialog'), { ssr: false });

export const Img = ({ width, height, src, ...p }) => (
  <details className={s.details}>
    <summary className={s.summary} style={{ paddingBottom: `${(height / width) * 100 || 0}%` }}>
      <Image
        {...p}
        className={cn(s.image, p.className)}
        src={`${src}&name=small`}
        layout="fill"
        objectFit="cover"
        quality={80}
      />
    </summary>

    <details-dialog className={s['details-dialog']}>
      <div className={s.bg} data-close-dialog />
      <Image {...p} src={`${src}&name=large`} width={width} height={height} />
    </details-dialog>

    <LoadDetailsDialog />
  </details>
);
