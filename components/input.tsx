'use client';

import clsx from 'clsx';
import { useState } from 'react';

export default function InputItem() {
  const [value, setValue] = useState('');
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;

    if (val === '' || val.trim() !== '') {
      setValue(val);
    }
  };

  return (
    <div className='flex items-center gap-2 px-3 py-4 rounded-md 2xs:px-6 group bg-dev-gray100 text-sm 2xs:text-[16px]'>
      <label htmlFor='textInput' className='sr-only'>
        텍스트 입력창
      </label>
      <input name='textInput' type='text' placeholder='Placeholder' className={clsx('font-medium w-full bg-transparent outline-none group-hover:text-dev-gray800', value ? 'text-dev-gray600' : 'text-dev-gray300')} onChange={handleChange} value={value} />
      <button className={clsx('font-bold whitespace-nowrap group-hover:text-dev-primary', value ? 'text-dev-primary cursor-pointer' : 'text-dev-gray400')}>추가</button>
    </div>
  );
}
