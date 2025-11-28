'use client';
import clsx from 'clsx';
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
    <header className='fixed top-0 left-0 w-full px-6 py-4 bg-white border-b border-dev-gray200 z-10000'>
      <div className='flex items-center gap-12'>
        <Link href='/' className='text-xl font-bold text-dev-primary'>
          <Image src='/logo/logo_horizen_brand.svg' width={148} height={40} alt='로고이미지' />
        </Link>

        <nav className='flex items-center justify-between flex-1'>
          <ul className='flex items-center gap-9'>
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className={clsx('font-semibold hover:underline underline-offset-4 text-dev-secondary', pathname === link.href ? 'underline' : '')}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <ul className='flex items-center gap-8'>
            {authLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className={clsx('font-semibold hover:underline underline-offset-4 text-dev-secondary', pathname === link.href ? 'underline' : 'text-dev-secondary')}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
