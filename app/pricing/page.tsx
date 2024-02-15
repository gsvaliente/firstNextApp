import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Pricing Page',
  description: 'Information about the page and all the pricing information',
  keywords: ['Price', 'Discounts', 'Specials'],
};

export default function PricingPage() {
  return (
    <>
      <span className='text-4xl'>Pricing Page</span>
    </>
  );
}
