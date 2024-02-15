import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Page',
  description: 'About page for SEO purposes',
  keywords: ['About Page', 'Gabriel', 'Information'],
};

export default function AboutPage() {
  return <span className='text-4xl'>About Page</span>;
}
