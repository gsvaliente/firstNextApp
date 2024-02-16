import Link from 'next/link';

import { ActiveLink } from '@/components';
import { HomeIcon } from '@primer/octicons-react';

const navItems = [
  { path: '/about', text: 'About' },
  { path: '/pricing', text: 'Pricing' },
  { path: '/contact', text: 'Contact' },
];

export function Navbar() {
  return (
    <nav className='flex bg-blue-800 bg-opacity-30 p-2 m-2 rounded'>
      <Link href={'./'} className='flex items-center'>
        <span>
          <HomeIcon className='mr-2' size={18} />
          Home
        </span>
      </Link>

      <div className='flex flex-end flex-1' />
      {navItems.map((item) => (
        <ActiveLink key={item.path} {...item} />
      ))}
    </nav>
  );
}
