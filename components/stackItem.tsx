interface StackItemProps {
  subject: string;
  number: number;
}

export default function StackItem({ subject, number }: StackItemProps) {
  return (
    <div className='flex items-center'>
      <p className='mr-2 text-dev-gray500'>{subject}</p>
      <p className='font-semibold text-dev-gray700'>
        <span>{number}</span>
        <span>{subject === '경력' ? '년' : '시간'}</span>
      </p>
    </div>
  );
}
