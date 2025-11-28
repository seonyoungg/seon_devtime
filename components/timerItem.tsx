interface TimerBoxProps {
  value?: number;
  label: string;
}

export default function TimerItem({ value = 0, label }: TimerBoxProps) {
  return (
    <div className='p-4 pb-8 border border-dev-primary text-dev-primary rounded-xl bg-linear-to-br from-dev-primary/0 to-dev-primary/20 w-[220px]'>
      <p className='text-[154px] font-digital tracking-widest text-center'>{value ? String(value).padStart(2, '0') : '00'}</p>
      <p className='text-sm font-semibold text-center'>{label}</p>
    </div>
  );
}
