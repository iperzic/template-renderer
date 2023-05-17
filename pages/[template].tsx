import Head from 'next/head';
import Template from '@/components/Template';

import type {
  GetStaticPathsResult,
  GetStaticPropsContext,
  GetStaticPropsResult,
} from 'next';
import type { Params } from 'next/dist/shared/lib/router/utils/route-matcher';

type TemplatePageProps = {
  title: string;
  description: string;
  groups: Array<any>;
};
export default function TemplatePage({
  title,
  description,
  groups,
}: TemplatePageProps) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} key="desc" />
      </Head>
      <Template groups={groups} />
    </>
  );
}

export async function getStaticProps({
  params,
}: GetStaticPropsContext): Promise<GetStaticPropsResult<TemplatePageProps>> {
  const { template } = params as Params;
  const response = await fetch(process.env.HOST_URL + template);

  if (!response.ok) {
    return {
      redirect: {
        permanent: false,
        destination: '/home',
      },
    };
  }

  const data = await response.json();

  return {
    props: {
      title: data.meta_title,
      description: data.meta_description,
      groups: data.groups,
    },
    revalidate: 60,
  };
}

export function getStaticPaths(): GetStaticPathsResult {
  return {
    paths: [],
    fallback: 'blocking',
  };
}
