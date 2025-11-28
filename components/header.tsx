'use client';
import clsx from 'clsx';
import { Menu } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function DevHeader() {
  const pathname = usePathname();

  const navLinks = [
    { href: '/dashboard', label: '대시보드' },
    { href: '/rank', label: '랭킹' },
    { href: '/components', label: '컴포넌트' },
  ];

  const authLinks = [
    { href: '/login', label: '로그인' },
    { href: '/join', label: '회원가입' },
  ];

  return (
    <header className='text-sm xs:text-[16px] fixed top-0 left-0 w-full px-2 2xs:px-6 py-4 bg-white border-b border-dev-gray200 z-10000'>
      <div className='flex items-center gap-4 sm:gap-12'>
        <Link href='/' className='shrink'>
          <Image src='/logo/logo_horizen_brand.svg' width={148} height={40} alt='로고이미지' className='h-auto w-28 sm:w-37' />
        </Link>

        <nav className='items-center justify-end flex-1 hidden gap-4 2xs:flex sm:justify-between sm:gap-0'>
          <ul className='flex items-center gap-4 sm:gap-9'>
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className={clsx('font-semibold hover:underline underline-offset-4 text-dev-secondary', pathname === link.href ? 'underline' : '')}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <ul className='flex items-center gap-4 sm:gap-9'>
            {authLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className={clsx('font-semibold hover:underline underline-offset-4 text-dev-secondary', pathname === link.href ? 'underline' : 'text-dev-secondary')}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <button className='ml-auto 2xs:hidden'>
          <Menu className='text-dev-secondary' size={18} />
        </button>
      </div>
    </header>
  );
}
