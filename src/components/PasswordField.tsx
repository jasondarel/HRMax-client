import { useState, forwardRef } from 'react';
import type { InputHTMLAttributes, ReactNode } from 'react';
import { Eye, EyeOff } from 'lucide-react';
import { cn } from '../utils';

interface PasswordFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  labelRight?: ReactNode;
  icon?: ReactNode;
  error?: string;
}

export const PasswordField = forwardRef<HTMLInputElement, PasswordFieldProps>(
  ({ label, labelRight, icon, id, className = '', error, ...props }, ref) => {
    const [showPassword, setShowPassword] = useState(false);

    return (
    <div className={cn("space-y-1", className)}>
      <div className="flex items-center justify-between">
        <label className="block text-sm font-semibold text-heading" htmlFor={id}>
          {label}
        </label>
        {labelRight}
      </div>
      <div className="relative">
        {icon && (
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4 text-surface dark:text-primary [&>svg]:h-5 [&>svg]:w-5">
            {icon}
          </div>
        )}
        <input
          id={id}
          ref={ref}
          type={showPassword ? 'text' : 'password'}
          className={cn(
            "block w-full rounded-xl border border-border-subtle bg-white/70 dark:bg-bg-subtle",
            icon ? 'pl-11' : 'pl-4',
            "pr-12 py-2.5 text-heading transition-all focus:outline-none focus:ring-2 focus:ring-opacity-20 shadow-sm",
            error ? "border-red-500 focus:border-red-500 focus:ring-red-500" : "focus:border-primary focus:ring-primary"
          )}
          {...props}
        />
        <button
          type="button"
          aria-label={showPassword ? "Hide password" : "Show password"}
          onClick={() => setShowPassword(!showPassword)}
          className="absolute inset-y-0 right-0 flex items-center pr-4 text-foreground opacity-50 hover:opacity-100 transition-opacity focus:outline-none cursor-pointer"
        >
          {showPassword ? (
            <Eye className="h-5 w-5" />
          ) : (
            <EyeOff className="h-5 w-5" />
          )}
        </button>
      </div>
      {error && <p className="text-sm text-red-500">{error}</p>}
    </div>
  );
});
