import Image from 'next/image';
import StackItem from './stackItem';
import TagItem from './tagItem';
import clsx from 'clsx';

interface RankingItemProps {
  rank: number;
}

export default function RankingItem({ rank }: RankingItemProps) {
  return (
    <div className='flex flex-col w-full gap-4 px-6 py-3 bg-white border sm:flex-row sm:gap-9 border-dev-gray200 rounded-xl'>
      <div className='space-y-4'>
        <p className={clsx('px-2 font-bold text-lg xs:text-xl inline-flex rounded-lg', rank === 1 && 'text-white bg-dev-primary', rank > 1 && rank <= 10 && 'text-dev-primary bg-dev-primarylight/10', rank > 10 && 'text-dev-gray500 bg-dev-gray100')}>{rank.toLocaleString()}위</p>
        <div className='relative w-20 h-20 rounded-full bg-dev-gray200'>
          <Image fill className='' sizes='80px' src='/profile_basic.png' alt='프로필기본이미지' />
        </div>
      </div>
      <div className='space-y-4'>
        <div className='text-dev-primary'>
          <p className='text-xl font-bold'>CoffeeScripted</p>
          <p className='font-medium'>“구글 없이 코딩하기... 아니 걍 구글 이직 가즈아!”</p>
        </div>
        <div className='flex flex-wrap gap-x-6 gap-y-2'>
          <StackItem subject='누적' number={120} />
          <StackItem subject='일 평균' number={2} />
          <StackItem subject='경력' number={2} />
        </div>
        <div className='flex flex-wrap gap-2'>
          <TagItem tag='태그1' />
          <TagItem tag='태그2' />
          <TagItem tag='태그3' />
        </div>
      </div>
    </div>
  );
}
