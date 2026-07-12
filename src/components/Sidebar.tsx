import { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Building2, 
  LayoutDashboard, 
  Users, 
  Briefcase, 
  Calendar, 
  Settings, 
  LogOut,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import { cn } from '../utils';

export function Sidebar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <aside className={cn(
      "relative bg-background border-r border-border-subtle flex-col justify-between hidden md:flex shrink-0 transition-all duration-300",
      isSidebarOpen ? "w-64" : "w-20"
    )}>
      {/* Toggle Button */}
      <button 
        id="sidebar-toggle-btn"
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        className="absolute -right-3.5 top-5 z-50 flex h-7 w-7 items-center justify-center rounded-full border border-border-subtle bg-background text-foreground shadow-sm hover:text-primary transition-colors cursor-pointer hidden md:flex"
        title="Toggle Sidebar"
      >
        {isSidebarOpen ? <ChevronLeft className="h-4 w-4" /> : <ChevronRight className="h-4 w-4" />}
      </button>
      
      <div>
        <div className={cn(
          "h-16 flex items-center border-b border-border-subtle",
          isSidebarOpen ? "px-6" : "justify-center"
        )}>
          <Link to="/" className="flex items-center gap-2">
            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-primary to-accent text-white shadow-sm">
              <Building2 className="h-4 w-4" />
            </div>
            {isSidebarOpen && <span className="font-bold text-lg text-heading whitespace-nowrap overflow-hidden transition-all duration-300">HRMax</span>}
          </Link>
        </div>
        
        <nav className="p-4 space-y-2">
          <a href="#" id="nav-dashboard" className={cn(
            "flex items-center py-2.5 rounded-lg font-medium transition-all",
            isSidebarOpen ? "gap-3 px-3" : "justify-center",
            "bg-gradient-to-r from-primary to-accent text-white shadow-md hover:shadow-lg hover:-translate-y-0.5"
          )} title={!isSidebarOpen ? "Dashboard" : undefined}>
            <LayoutDashboard className="h-5 w-5 shrink-0" />
            {isSidebarOpen && <span>Dashboard</span>}
          </a>
          <a href="#" id="nav-employees" className={cn(
            "flex items-center py-2.5 text-foreground hover:bg-white dark:hover:bg-white/10 hover:text-primary rounded-lg font-medium transition-colors",
            isSidebarOpen ? "gap-3 px-3" : "justify-center"
          )} title={!isSidebarOpen ? "Employees" : undefined}>
            <Users className="h-5 w-5 shrink-0" />
            {isSidebarOpen && <span>Employees</span>}
          </a>
          <a href="#" id="nav-recruitment" className={cn(
            "flex items-center py-2.5 text-foreground hover:bg-white dark:hover:bg-white/10 hover:text-primary rounded-lg font-medium transition-colors",
            isSidebarOpen ? "gap-3 px-3" : "justify-center"
          )} title={!isSidebarOpen ? "Recruitment" : undefined}>
            <Briefcase className="h-5 w-5 shrink-0" />
            {isSidebarOpen && <span>Recruitment</span>}
          </a>
          <a href="#" id="nav-time-off" className={cn(
            "flex items-center py-2.5 text-foreground hover:bg-white dark:hover:bg-white/10 hover:text-primary rounded-lg font-medium transition-colors",
            isSidebarOpen ? "gap-3 px-3" : "justify-center"
          )} title={!isSidebarOpen ? "Time Off" : undefined}>
            <Calendar className="h-5 w-5 shrink-0" />
            {isSidebarOpen && <span>Time Off</span>}
          </a>
        </nav>
      </div>
      
      <div className="p-4 border-t border-border-subtle space-y-2">
        <a href="#" id="nav-settings" className={cn(
          "flex items-center py-2.5 text-foreground hover:bg-white dark:hover:bg-white/10 hover:text-primary rounded-lg font-medium transition-colors",
          isSidebarOpen ? "gap-3 px-3" : "justify-center"
        )} title={!isSidebarOpen ? "Settings" : undefined}>
          <Settings className="h-5 w-5 shrink-0" />
          {isSidebarOpen && <span>Settings</span>}
        </a>
        <Link to="/login" id="nav-logout" className={cn(
          "flex items-center py-2.5 text-red-500 hover:bg-red-50 dark:hover:bg-red-500/10 rounded-lg font-medium transition-colors",
          isSidebarOpen ? "gap-3 px-3" : "justify-center"
        )} title={!isSidebarOpen ? "Logout" : undefined}>
          <LogOut className="h-5 w-5 shrink-0" />
          {isSidebarOpen && <span>Logout</span>}
        </Link>
      </div>
    </aside>
  );
}
