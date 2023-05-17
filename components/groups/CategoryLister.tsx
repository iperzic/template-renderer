import Image from 'next/image';
import Link from 'next/link';
import type { GroupProps } from '@/components/groups/types';

import styles from '@/styles/CategoryLister.module.css';
import Markdown from '@/components/Markdown';

export default function CategoryLister({ elements }: GroupProps) {
  const { markdown_content, linked_product_tag_groups, urls } = elements[0];
  const url = urls?.[0];
  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <Markdown content={markdown_content} className={styles.markdown} />
        {url && (
          <Link
            href={url.url}
            target={url.target}
            className={styles.headerLink}
          >
            {url.name}
          </Link>
        )}
      </div>
      <div className={styles.grid}>
        {linked_product_tag_groups[0].product_tag_group.linked_product_tags.map(
          ({ product_tag }: any) => (
            <Link
              key={product_tag.url}
              className={styles.gridItem}
              href={product_tag.url}
            >
              <Image
                src={product_tag.media_url}
                alt={product_tag.media_alt}
                fill
                style={{ objectFit: 'cover' }}
                quality={80}
              />
              <div className={styles.gridItemTitle}>{product_tag.name}</div>
            </Link>
          )
        )}
      </div>
    </div>
  );
}
