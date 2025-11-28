import AlertModal from '@/components/alertModal';
import Button from '@/components/button';
import ImgUploader from '@/components/imgUploader';
import InputItem from '@/components/input';
import RankingItem from '@/components/rankingItem';

export default function ComponentsAll() {
  return (
    <>
      <div className='p-8'>
        <h1>컴포넌트 확인용 페이지</h1>

        <section className='my-8 space-y-4'>
          <h2>버튼 컴포넌트</h2>
          <div className='flex items-center gap-4'>
            <Button>버튼</Button>
            <Button variant='light'>버튼</Button>
            <Button variant='secondaryLight'>버튼</Button>
            <Button disabled>버튼</Button>
          </div>
        </section>
        <section className='my-8 space-y-4'>
          <h2>인풋 컴포넌트</h2>
          <div className='flex items-center gap-4'>
            <InputItem />
          </div>
        </section>
        <section className='my-8 space-y-4'>
          <h2>이미지 업로드 컴포넌트</h2>
          <div className='flex flex-col gap-4'>
            <ImgUploader />
          </div>
        </section>
        <section className='my-8 space-y-4'>
          <h2>모달 알림창 컴포넌트</h2>
          <div className='flex flex-col gap-4'>
            <AlertModal title='제목' content='내용' />
            <AlertModal content='내용만 있는경우' />
          </div>
        </section>
        <section className='my-8 space-y-4'>
          <h2>랭킹 아이템 컴포넌트</h2>
          <div className='flex flex-col gap-4'>
            <RankingItem rank={1} />
            <RankingItem rank={8} />
            <RankingItem rank={1000} />
          </div>
        </section>
      </div>
    </>
  );
}
