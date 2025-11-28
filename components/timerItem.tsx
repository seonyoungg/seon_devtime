interface TimerBoxProps {
  value?: number;
  label: string;
}

export default function TimerItem({ value = 0, label }: TimerBoxProps) {
  return (
    <div className='w-full col-span-3 p-4 pb-8 border border-dev-primary text-dev-primary rounded-xl bg-linear-to-br from-dev-primary/0 to-dev-primary/20'>
      <p className='text-[15vw] lg:text-[154px] font-digital tracking-widest text-center'>{value ? String(value).padStart(2, '0') : '00'}</p>
      <p className='text-[12px] xs:text-sm font-semibold text-center'>{label}</p>
    </div>
  );
}
