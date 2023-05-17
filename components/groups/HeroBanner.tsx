import Image from 'next/image';
import Link from 'next/link';
import classnames from 'classnames';
import Markdown from '@/components/Markdown';

import type { GroupProps } from '@/components/groups/types';

import styles from '@/styles/HeroBanner.module.css';

export default function HeroBanner({ elements }: GroupProps) {
  const { markdown_content, media, configuration, urls } = elements[0];
  const height =
    configuration.find((config: any) => typeof config.height === 'number')
      ?.height || 500;

  return (
    <div className={styles.wrapper} style={{ minHeight: height }}>
      <Image
        src={media[0].media_url}
        alt={media[0].media_alt}
        fill
        style={{ objectFit: 'cover' }}
      />
      <div className={styles.content}>
        <Markdown content={markdown_content} className={styles.markdown} />
        <div className={styles.links}>
          <Link
            href={urls[0].url}
            target={urls[0].target}
            className={classnames(styles.link, styles.linkPrimary)}
          >
            {urls[0].name}
          </Link>
          <Link
            href={urls[1].url}
            target={urls[1].target}
            className={styles.link}
          >
            {urls[1].name}
          </Link>
        </div>
      </div>
    </div>
  );
}
