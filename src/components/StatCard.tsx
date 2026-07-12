import type { ReactNode } from 'react';
import { cn } from '../utils';
import { ArrowUpRight, ArrowDownRight } from 'lucide-react';

interface StatCardProps {
  title: string;
  value: string;
  trend: string;
  trendType?: 'positive' | 'negative';
  icon: ReactNode;
  theme: 'primary' | 'accent' | 'orange' | 'blue';
}

export function StatCard({ title, value, trend, trendType = 'positive', icon, theme }: StatCardProps) {
  const isPositive = trendType === 'positive';
  
  return (
    <div className="rounded-xl p-6 border border-border-subtle bg-white dark:bg-slate-900 shadow-sm hover:shadow-md hover:border-primary/30 transition-all flex flex-col justify-between group">
      <div className="flex items-center justify-between mb-4">
        <p className="text-sm font-medium text-foreground opacity-70 group-hover:opacity-100 transition-opacity">{title}</p>
        <div className={cn(
          "h-9 w-9 rounded-md flex items-center justify-center transition-colors",
          theme === 'primary' && "bg-indigo-50 text-indigo-600 dark:bg-indigo-500/10 dark:text-indigo-400",
          theme === 'accent' && "bg-purple-50 text-purple-600 dark:bg-purple-500/10 dark:text-purple-400",
          theme === 'orange' && "bg-orange-50 text-orange-600 dark:bg-orange-500/10 dark:text-orange-400",
          theme === 'blue' && "bg-blue-50 text-blue-600 dark:bg-blue-500/10 dark:text-blue-400"
        )}>
          {icon}
        </div>
      </div>
      
      <div className="flex items-baseline justify-between mt-auto">
        <h3 className="text-3xl font-bold tracking-tight mb-0">{value}</h3>
        
        <div className={cn(
          "flex items-center gap-1 text-sm font-semibold",
          isPositive ? "text-emerald-600 dark:text-emerald-400" : "text-rose-600 dark:text-rose-400"
        )}>
          {isPositive ? <ArrowUpRight className="h-4 w-4" /> : <ArrowDownRight className="h-4 w-4" />}
          <span>{trend}</span>
        </div>
      </div>
    </div>
  );
}
