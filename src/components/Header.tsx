import { Search, Bell } from 'lucide-react';

export function Header() {
  return (
    <header className="h-16 bg-surface dark:bg-bg-subtle border-b border-border-subtle flex items-center justify-between px-6 shrink-0">
      <div className="flex items-center">
        <div className="flex items-center bg-background rounded-full px-4 py-1.5 w-64 border border-border-subtle focus-within:border-primary focus-within:ring-1 focus-within:ring-primary transition-all">
          <Search className="h-4 w-4 text-foreground opacity-50 shrink-0" />
          <input 
            id="dashboard-search"
            type="text" 
            placeholder="Search..." 
            className="bg-transparent border-none focus:outline-none text-sm w-full ml-2 text-foreground"
          />
        </div>
      </div>
      
      <div className="flex items-center gap-4">
        <button id="notifications-btn" className="relative p-2 text-foreground hover:bg-white dark:hover:bg-white/10 hover:text-primary rounded-full transition-colors">
          <Bell className="h-5 w-5" />
          <span className="absolute top-1 right-1 h-2 w-2 rounded-full bg-red-500"></span>
        </button>
        <div id="user-profile-menu" className="flex items-center gap-3 pl-4 border-l border-border-subtle cursor-pointer">
          <div className="text-right hidden sm:block">
            <p className="text-sm font-semibold text-heading leading-none mb-1">Jane Doe</p>
            <p className="text-xs text-foreground opacity-70 leading-none">HR Manager</p>
          </div>
          <div className="h-9 w-9 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white font-medium shadow-sm">
            JD
          </div>
        </div>
      </div>
    </header>
  );
}
