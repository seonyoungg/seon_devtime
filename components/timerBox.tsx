'use client';

import TimerItem from '@/components/timerItem';
import { useState } from 'react';

export default function TimerBox() {
  const [hour, setHour] = useState(0);
  const [min, setMin] = useState(0);
  const [sec, setSec] = useState(0);
  const [isRun, setIsRun] = useState(false);

  return (
    <>
      {/* 타이머 디스플레이 */}
      <div className='flex items-center gap-4'>
        <TimerItem value={hour} label='HOURS' />
        <span className='text-6xl font-bold text-dev-primary'>:</span>
        <TimerItem value={min} label='MINUTES' />
        <span className='text-6xl font-bold text-dev-primary'>:</span>
        <TimerItem value={sec} label='SECONDS' />
      </div>
    </>
  );
}
