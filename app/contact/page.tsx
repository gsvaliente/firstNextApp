import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Page',
  description: 'If you need more help with anything, contact us.',
  keywords: ['Help', 'Contact', 'Assistance', '24/7', 'Chat'],
};

export default function ContactPage() {
  return (
    <>
      <span className='text-4xl'>Contact Page</span>
    </>
  );
}
