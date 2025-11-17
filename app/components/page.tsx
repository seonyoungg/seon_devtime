import Button from '@/components/button';

export default function ComponentsAll() {
  return (
    <div>
      <h1>컴포넌트 확인용 페이지</h1>
      
      <section className='flex gap-4 items-center'>
        <Button>버튼</Button>
        <Button variant="light">버튼</Button>
        <Button variant="secondaryLight">버튼</Button>
        <Button disabled>버튼</Button>
      </section>
    </div>
  );
}
