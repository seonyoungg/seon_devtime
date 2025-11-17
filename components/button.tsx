import clsx from "clsx";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?:'default'|'light'|'secondaryLight';
  disabled?:boolean;
  children:React.ReactNode;
}

export default function Button({
  variant='default',
  disabled=false,
  children,
  ...restProps
}:ButtonProps) {

  // 기본 스타일
  const baseStyles = "relative px-4 py-3 rounded-sm min-w-20 overflow-hidden focus:outline-(--color-dev-fuchsia)"

  // 타입별 배경색
  const typeStyles = {
    default : "bg-(--color-dev-primary) text-white cursor-pointer",
    light: "bg-(--color-dev-primary200) text-(--color-dev-primary) cursor-pointer",
    secondaryLight: "bg-(--color-dev-primary300) text-(--color-dev-primary) cursor-pointer",
  }

  // 상태별 제어(disabled)
  const statusStyles = disabled ? "cursor-not-allowed text-(--color-dev-gray300) bg-(--color-dev-gray400)" : ""
  
  return (
    <button className={clsx(
        baseStyles, 
        !disabled && typeStyles[variant],  
        statusStyles
      )} disabled={disabled} {...restProps}>

      {/* 텍스트 */}
      <span className="relative z-10">{children}</span>

      {/* hover 오버레이 */}
      {
        !disabled && (
          <span className="absolute inset-0 bg-black opacity-0 hover:opacity-10 transition-opacity duration-300"></span>
        )
      }
    </button>
  );
}
