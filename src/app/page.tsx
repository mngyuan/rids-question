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
      <div className="flex flex-col min-h-screen">
        <main className="grow flex flex-col">
          <OneGoodQuestion />
        </main>
        <footer className="text-center py-4 text-sm text-gray-600">
          <p>professional humans r&d</p>
          <p>&copy; {new Date().getFullYear()}</p>
        </footer>
      </div>
    </>
  );
}
