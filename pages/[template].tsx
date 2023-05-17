import Head from 'next/head';
import Template from '@/components/Template';

import type { GetServerSidePropsContext, GetServerSidePropsResult } from 'next';

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

export async function getServerSideProps({
  query,
}: GetServerSidePropsContext): Promise<
  GetServerSidePropsResult<TemplatePageProps>
> {
  const { template } = query;
  const response = await fetch(
    'https://adapptive-sandbox.bettywebblocks.com/' + template
  );

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
  };
}
