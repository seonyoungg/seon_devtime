import Button from '@/components/button';

interface AlertModalProps {
  title?: string;
  content: string;
}

export default function AlertModal({ title, content }: AlertModalProps) {
  return (
    <div className='flex flex-col justify-between w-full gap-6 p-6 bg-white rounded-lg shadow-xl max-w-80 shadow-gray-600/20'>
      <div className='space-y-2'>
        {title && <p className='text-xl font-semibold text-dev-gray800'>{title}</p>}
        <p className='font-medium text-dev-gray500'>{content}</p>
      </div>
      <div className='flex items-center justify-end w-full gap-4'>
        <Button variant='secondaryLight'>버튼</Button>
        <Button>버튼</Button>
      </div>
    </div>
  );
}
