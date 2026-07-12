import type { ButtonHTMLAttributes, ReactNode } from 'react';
import { cn } from '../utils';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  icon?: ReactNode;
}

export function Button({ children, icon, className = '', ...props }: ButtonProps) {
  return (
    <button
      className={cn(
        "group relative flex w-full justify-center rounded-xl bg-gradient-to-r from-primary to-accent px-4 py-3.5 text-lg font-semibold text-white shadow-[0_4px_14px_0_rgba(107,102,198,0.39)] transition-all hover:shadow-[0_6px_20px_rgba(107,102,198,0.23)] hover:-translate-y-0.5 hover:cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background",
        className
      )}
      {...props}
    >
      <span className="relative flex items-center">
        {children}
        {icon && (
          <span className="ml-2 inline-flex transition-transform group-hover:translate-x-1">
            {icon}
          </span>
        )}
      </span>
    </button>
  );
}
