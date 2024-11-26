import * as React from "react";

import { cn } from "@/app/(shared)/lib/utils";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const LeftSlot = ({
  children,
  ...otherProps
}: React.ComponentProps<"span">) => (
  <span
    className="peer-focus:flex peer-valid:flex absolute top-1/2 -translate-y-1/2 font-bold text-sm lg:text-[26px] left-[16px] lg:left-[30px] hidden justify-center items-center w-[15px]"
    {...otherProps}
  >
    {children}
  </span>
);

const Input = Object.assign(
  // eslint-disable-next-line react/display-name
  React.forwardRef<
    HTMLInputElement,
    InputProps & { leftSlot?: React.ReactNode }
  >(({ className, type, placeholder, leftSlot, ...props }, ref) => {
    return (
      <div className="relative">
        <input
          required
          type={type}
          className={cn(
            "peer text-sm lg:text-[26px] font-bold flex h-[46px] lg:h-[75px] w-full rounded-md border border-input bg-background px-[25px] py-2 ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
            leftSlot && "pl-[28px] lg:pl-[48px]",
            className
          )}
          placeholder=" "
          ref={ref}
          {...props}
        />
        {leftSlot}
        <span className="text-sm peer-focus:text-xs peer-valid:text-xs lg:text-base text-muted-foreground pointer-events-none absolute top-1/2 -translate-y-1/2 left-[16px] lg:left-[30px] duration-200 lg:peer-focus:text-sm peer-focus:top-0 lg:peer-valid:text-sm peer-valid:top-0 bg-white">
          {placeholder}
        </span>
      </div>
    );
  }),
  {
    LeftSlot: LeftSlot,
  }
);

Input.displayName = "Input";

export default Input;
