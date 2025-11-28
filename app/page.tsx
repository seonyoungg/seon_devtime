import TimerBox from '@/components/timerBox';

export default function Home() {
  return (
    <>
      <div className='pt-40 pb-12 text-center text-dev-secondary'>
        <h1 className='text-5xl font-bold md:text-7xl'>WELCOME</h1>
        <p className='pt-2 text-sm'>DevTime을 사용하려면 로그인이 필요합니다</p>
      </div>
      <TimerBox />
    </>
  );
}
