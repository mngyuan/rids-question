import type {Metadata} from 'next';
import OneGoodQuestion from '@/components/OneGoodQuestion';

export const metadata: Metadata = {
  title: 'Remix the system',
  description: 'A reflective tool for systems-thinking questions',
};

export default function Home() {
  return (
    <>
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
