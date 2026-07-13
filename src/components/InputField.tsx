import { forwardRef } from 'react';
import type { InputHTMLAttributes, ReactNode } from 'react';
import { cn } from '../utils';

interface InputFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  icon?: ReactNode;
  error?: string;
}

export const InputField = forwardRef<HTMLInputElement, InputFieldProps>(
  ({ label, icon, id, className = '', error, ...props }, ref) => {
    return (
      <div className={cn("space-y-1", className)}>
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
          ref={ref}
            className={cn(
              "block w-full rounded-xl border border-border-subtle bg-white/70 dark:bg-bg-subtle",
            icon ? 'pl-11' : 'pl-4',
            "pr-4 py-2.5 text-heading transition-all focus:outline-none focus:ring-2 focus:ring-opacity-20 shadow-sm",
            error ? "border-red-500 focus:border-red-500 focus:ring-red-500" : "focus:border-primary focus:ring-primary"
          )}
          {...props}
        />
      </div>
      {error && <p className="text-sm text-red-500">{error}</p>}
    </div>
  );
});
