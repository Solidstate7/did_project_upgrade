import { ButtonHTMLAttributes, FC } from "react";
import { cva, VariantProps } from "class-variance-authority";
import { cn } from "../../utils/cn";

export const ButtonVariants = cva(
  `
  flex justify-center items-center active:scale-95 rounded-xl 
  font-bold text-slate-100 transition-all shadow-md
  hover:scale-105 duration-200
  `,
  {
    variants: {
      variant: {
        default: "",
        iconBtn: "border border-slate-400 text-slate-600",
        iconTextBtn: "border border-slate-400 text-slate-600",
        sendBtn1: "bg-[#ff4400]",
        sendBtn2: "bg-gradient-to-r from-[#ec4609] to-[#FFA787]",
        topBtn: "",
      },
      size: {
        default: "",
        sm: "w-[40px] h-[40px] text-[16px] rounded-md",
        md: "w-[105px] h-[40px] text-[16px] rounded-xl",
        mdl: "w-[120px] h-[40px] text-[16px] rounded-xl",
        lg: "w-[300px] h-[50px] text-[20px] rounded-xl",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof ButtonVariants> {
  label?: string;
  children?: React.ReactElement;
}

const Button: FC<ButtonProps> = ({
  variant,
  size,
  children,
  label,
  ...props
}) => {
  return (
    <button className={cn(ButtonVariants({ variant, size }))} {...props}>
      {children && children}
      {label && label}
    </button>
  );
};

export default Button;