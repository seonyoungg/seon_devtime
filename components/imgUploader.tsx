'use client';

import clsx from 'clsx';
import { ImagePlus, X } from 'lucide-react';
import Image from 'next/image';
import { useRef, useState } from 'react';
import { toast } from 'react-toastify';

export default function ImgUploader() {
  const [imgSrc, setImgSrc] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  // 파일선택
  const attachImgPath = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    if (!file) return;

    if (!file.type.startsWith('image/')) {
      toast.error('이미지 파일만 업로드 가능합니다.');
      return;
    }

    // URL.createObjectURL 로 미리보기 설정
    const imgURL = URL.createObjectURL(file);
    setImgSrc(imgURL);

    console.log(`url`, imgURL);
  };

  // 파일삭제
  const removeImg = () => {
    setImgSrc('');

    if (imgSrc && imgSrc.startsWith('blob:')) {
      URL.revokeObjectURL(imgSrc);
    }

    if (inputRef.current) {
      inputRef.current.value = '';
    }
  };

  return (
    <div className='w-fit flex items-end gap-2'>
      <label htmlFor='imgInput' className='sr-only'>
        사진 업로드
      </label>
      <input ref={inputRef} onChange={attachImgPath} type='file' name='imgInput' accept='image/*' className='hidden' />

      <div className={clsx('relative w-30 h-30 rounded-md bg-white border', imgSrc !== '' ? 'border-dev-gray300' : 'border-dev-primary border-dashed')}>
        {/* 업로드 박스  */}
        {imgSrc ? <Image src={imgSrc} fill alt='업로드된 이미지' className='w-full h-full object-cover rounded-md' /> : <ImagePlus size={32} onClick={() => inputRef.current?.click()} className='absolute left-1/2 top-1/2 -translate-1/2 text-dev-primary) cursor-pointer' />}

        {/* 삭제버튼 */}
        {imgSrc && (
          <button type='button' onClick={removeImg} className='absolute top-1.5 right-1.5 bg-black/60 hover:bg-black/80 text-white p-1 rounded-full z-1'>
            <X size={16} />
          </button>
        )}
      </div>
      <span className='text-sm text-dev-gray500 font-medium'>5MB 미만의 .png, .jpeg, .gif 파일</span>
    </div>
  );
}
