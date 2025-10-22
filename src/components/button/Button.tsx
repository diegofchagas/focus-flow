import type {ReactNode } from "react";
import { forwardRef } from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  icon: ReactNode;
  color: string;


}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(({ icon, color, ...rest}, ref) => {
  return (
    <button
      ref={ref}
      className={`${color} rounded-lg px-[7rem] py-2 flex items-center justify-center cursor-pointer hover:brightness-[80%] duration-150`}
      {...rest}
    >
      {icon}
    </button>
  );
});
