import Button from '@/components/button';
import InputItem from '@/components/input';

export default function ComponentsAll() {
  return (
    <div>
      <h1>컴포넌트 확인용 페이지</h1>
      
      <section className='space-y-4 my-8'>
        <h2>버튼 컴포넌트</h2>
        <div className='flex gap-4 items-center'>
          <Button>버튼</Button>
          <Button variant="light">버튼</Button>
          <Button variant="secondaryLight">버튼</Button>
          <Button disabled>버튼</Button>
        </div>
      </section>
      <section className='space-y-4 my-8'>
        <h2>인풋 컴포넌트</h2>
        <div className='flex gap-4 items-center'>
          <InputItem/>
        </div>
      </section>
    </div>
  );
}
