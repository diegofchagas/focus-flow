import { forwardRef } from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  text?: string;
  id: string;
  type: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(({ text, id, type, ...props }, ref) => {
  return (
    <>
      <label htmlFor={id} className="text-lg text-gray-50">
        {text}
      </label>
      <input
        className="bg-transparent text-center text-[1.2rem] text-white p-2 border-2 border-transparent  border-b-green-300 outline-none border-b-2   focus:border-2 focus:border-green-300 focus:rounded-lg transition-all duration-100 ease-in-out"
        type={type}
        id={id}
        placeholder="digite algo"
        ref={ref}
        {...props}
      />
    </>
  );
});
