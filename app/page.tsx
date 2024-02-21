import Link from 'next/link';

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center p-24'>
      <span className='text-5xl'>Hello World</span>
      <span className='text-2xl'>I am Gabriel Valiente</span>
      <Link className='mt-5 hover:text-blue-500' href={'/about'}>
        About
      </Link>
    </main>
  );
}
