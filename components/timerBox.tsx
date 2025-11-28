'use client';

import TimerItem from '@/components/timerItem';
import clsx from 'clsx';
import { useEffect, useRef, useState } from 'react';

export default function TimerBox() {
  const [hour, setHour] = useState(0);
  const [min, setMin] = useState(0);
  const [sec, setSec] = useState(0);
  const [isRun, setIsRun] = useState(false);
  const [isStop, setIsStop] = useState(true);

  // intervalRef = setInterval이 반환하는 타이머 ID를 보관
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  // 타이머
  useEffect(() => {
    if (isRun) {
      intervalRef.current = setInterval(() => {
        setSec((prev) => {
          // 59 → 0으로 초기화, 분 증가
          if (prev === 59) {
            setMin((prevMin) => {
              // 59 → 0으로 초기화, 시간 증가
              if (prevMin === 59) {
                setHour((prevHour) => prevHour + 1);
                return 0;
              }
              return prevMin + 1;
            });
            return 0;
          }
          return prev + 1;
        });
      }, 1000);
    } else {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isRun]);

  // 재생
  const handlePlay = () => {
    setIsRun(true);
    setIsStop(false);
  };

  // 일시정지
  const handlePause = () => {
    setIsRun(false);
    setIsStop(false);
  };

  // 정지
  const handleStop = () => {
    setIsRun(false);
    setIsStop(true);
    setHour(0);
    setMin(0);
    setSec(0);
  };

  return (
    <div className='flex flex-col items-center gap-10 md:gap-18'>
      {/* 타이머 디스플레이 */}
      <div className='grid items-center grid-cols-11'>
        <TimerItem value={hour} label='HOURS' />
        <span className='col-span-1 text-[9vw] font-bold text-center sm:text-6xl text-dev-primary'>:</span>
        <TimerItem value={min} label='MINUTES' />
        <span className='col-span-1 text-[9vw] font-bold text-center sm:text-6xl text-dev-primary'>:</span>
        <TimerItem value={sec} label='SECONDS' />
      </div>

      {/* 컨트롤 버튼 */}
      <div className='flex items-center gap-8 md:gap-12'>
        <button onClick={handlePlay} className='cursor-pointer'>
          <svg role='img' aria-label='Play button' viewBox='0 0 80 100' fill='currentColor' className={clsx('w-12 h-15 md:w-20 md:h-25 transition-colors duration-300 hover:text-dev-primary', isRun ? 'text-dev-primary' : 'text-dev-primary/20')} xmlns='http://www.w3.org/2000/svg'>
            <path d='M77.6727 45.5679C80.7758 47.5378 80.7758 52.4623 77.6727 54.4321L6.98182 99.3067C3.87879 101.277 -1.56621e-07 98.8143 0 94.8747L3.56802e-06 5.12534C3.72464e-06 1.18573 3.87879 -1.27653 6.98182 0.693278L77.6727 45.5679Z' />
          </svg>
        </button>
        <button onClick={handlePause} className='cursor-pointer'>
          <svg role='img' aria-label='Pause button' viewBox='0 0 100 100' fill='currentColor' className={clsx('w-15 h-15 md:w-25 md:h-25 transition-colors duration-300 hover:text-dev-primary', !isRun && !isStop ? 'text-dev-primary' : 'text-dev-primary/20')} xmlns='http://www.w3.org/2000/svg'>
            <path d='M8 0C3.58172 0 0 3.58172 0 8V92C0 96.4183 3.58172 100 8 100H32C36.4183 100 40 96.4183 40 92V8C40 3.58172 36.4183 0 32 0H8Z' />
            <path d='M68 0C63.5817 0 60 3.58172 60 8V92C60 96.4183 63.5817 100 68 100H92C96.4183 100 100 96.4183 100 92V8C100 3.58172 96.4183 0 92 0H68Z' />
          </svg>
        </button>
        <button onClick={handleStop} className='cursor-pointer'>
          <svg role='img' aria-label='Stop button' viewBox='0 0 100 100' fill='currentColor' className={clsx('w-15 h-15 md:w-25 md:h-25 transition-colors duration-300 hover:text-dev-primary', isStop ? 'text-dev-primary' : 'text-dev-primary/20')} xmlns='http://www.w3.org/2000/svg'>
            <path d='M0 8C0 3.58172 3.58172 0 8 0H92C96.4183 0 100 3.58172 100 8V92C100 96.4183 96.4183 100 92 100H8C3.58172 100 0 96.4183 0 92V8Z' />
          </svg>
        </button>
      </div>
    </div>
  );
}
