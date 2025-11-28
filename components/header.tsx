import Image from 'next/image';
import Link from 'next/link';

export default function DevHeader() {
  return (
    <header className='fixed top-0 left-0 w-full px-6 py-4 bg-white border-b border-dev-gray200 z-10000'>
      <div className='flex items-center gap-12'>
        <Link href='/' className='text-xl font-bold text-dev-primary'>
          <Image src='/logo/logo_horizen_brand.svg' width={148} height={40} alt='로고이미지' />
        </Link>

        <nav className='flex items-center justify-between flex-1'>
          <ul className='flex items-center gap-9'>
            <li>
              <Link href='/dashboard' className='font-semibold text-dev-secondary hover:underline underline-offset-4'>
                대시보드
              </Link>
            </li>
            <li>
              <Link href='/rank' className='font-semibold text-dev-secondary hover:underline underline-offset-4'>
                랭킹
              </Link>
            </li>
            <li>
              <Link href='/components' className='font-semibold text-dev-secondary hover:underline underline-offset-4'>
                컴포넌트
              </Link>
            </li>
          </ul>

          <ul className='flex items-center gap-8'>
            <li>
              <Link href='/login' className='font-semibold text-dev-secondary hover:underline underline-offset-4'>
                로그인
              </Link>
            </li>
            <li>
              <Link href='/join' className='font-semibold text-dev-secondary hover:underline underline-offset-4'>
                회원가입
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
