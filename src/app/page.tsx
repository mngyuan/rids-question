import Head from 'next/head';
import OneGoodQuestion from '@/components/OneGoodQuestion';

export default function Home() {
  return (
    <>
      <Head>
        <title>Ask the system</title>
        <meta
          name="description"
          content="A reflective tool for systems-thinking questions"
        />
      </Head>
      <main>
        <OneGoodQuestion />
      </main>
    </>
  );
}
