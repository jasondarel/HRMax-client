import type { InputHTMLAttributes, ReactNode } from 'react';
import { cn } from '../utils';

interface InputFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  icon?: ReactNode;
}

export function InputField({ label, icon, id, className = '', ...props }: InputFieldProps) {
  return (
    <div className={cn("space-y-2", className)}>
      <label className="block text-sm font-semibold text-heading" htmlFor={id}>
        {label}
      </label>
      <div className="relative">
        {icon && (
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4 text-surface dark:text-primary [&>svg]:h-5 [&>svg]:w-5">
            {icon}
          </div>
        )}
        <input
          id={id}
          className={cn(
            "block w-full rounded-xl border border-border-subtle bg-white/70 dark:bg-bg-subtle",
            icon ? 'pl-11' : 'pl-4',
            "pr-4 py-3.5 text-heading transition-all focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-20 shadow-sm"
          )}
          {...props}
        />
      </div>
    </div>
  );
}
