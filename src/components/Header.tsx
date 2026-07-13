import { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, Bell, CheckCircle2, AlertCircle, Calendar } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';
import { cn } from '../utils';

const MOCK_NOTIFICATIONS = [
  { id: 1, title: 'Leave Request Approved', description: 'Your request for Annual Leave has been approved.', time: '2 mins ago', icon: CheckCircle2, unread: true, type: 'success', link: '/time-off' },
  { id: 2, title: 'New Company Policy', description: 'Please review the updated remote work policy.', time: '1 hour ago', icon: AlertCircle, unread: true, type: 'info', link: '/settings' },
  { id: 3, title: 'Upcoming Public Holiday', description: 'Office will be closed on Friday.', time: '1 day ago', icon: Calendar, unread: false, type: 'default', link: '/time-off' },
];

export function Header() {
  const [showNotifications, setShowNotifications] = useState(false);
  const notificationRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (notificationRef.current && !notificationRef.current.contains(event.target as Node)) {
        setShowNotifications(false);
      }
    }
    
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const unreadCount = MOCK_NOTIFICATIONS.filter(n => n.unread).length;

  return (
    <header className="h-16 bg-surface dark:bg-bg-subtle border-b border-border-subtle flex items-center justify-between px-6 shrink-0 relative z-30">
      <div className="flex items-center">
        <div className="flex items-center bg-white/70 dark:bg-bg-subtle rounded-full h-10 px-4 w-64 shadow-sm focus-within:border-primary focus-within:ring-2 focus-within:ring-primary/20 transition-all">
          <Search className="h-4 w-4 text-foreground opacity-50 shrink-0" />
          <input 
            id="dashboard-search"
            type="text" 
            placeholder="Search..." 
            className="bg-transparent border-none focus:outline-none text-sm w-full ml-2 text-foreground placeholder:text-foreground/50"
          />
        </div>
      </div>
      
      <div className="flex items-center gap-4">
        <div className="relative" ref={notificationRef}>
          <button 
            id="notifications-btn" 
            className="relative p-2 text-white hover:bg-white dark:hover:bg-white/10 hover:text-primary rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-white/50 cursor-pointer"
            onClick={() => setShowNotifications(!showNotifications)}
          >
            <Bell className="h-5 w-5" />
            {unreadCount > 0 && (
              <span className="absolute top-1 right-1 h-2 w-2 rounded-full bg-red-500 ring-2 ring-surface dark:ring-bg-subtle"></span>
            )}
          </button>
          
          <AnimatePresence>
          {showNotifications && (
            <motion.div 
              initial={{ opacity: 0, y: 10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.95 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="absolute top-full right-0 mt-2 w-80 bg-background rounded-xl shadow-lg border border-border-subtle overflow-hidden z-50 origin-top-right"
            >
              <div className="flex items-center justify-between px-4 py-3 border-b border-border-subtle">
                <h3 className="font-semibold text-heading">Notifications</h3>
                <span className="text-xs font-medium bg-primary/10 text-primary px-2 py-0.5 rounded-full">{unreadCount} new</span>
              </div>
              <div className="max-h-[300px] overflow-y-auto">
                {MOCK_NOTIFICATIONS.length > 0 ? (
                  <div className="flex flex-col">
                    {MOCK_NOTIFICATIONS.map((notification) => {
                      const Icon = notification.icon;
                      return (
                        <div 
                          key={notification.id} 
                          onClick={() => {
                            navigate(notification.link);
                            setShowNotifications(false);
                          }}
                          className={cn(
                            "flex gap-3 px-4 py-3 hover:bg-black/5 dark:hover:bg-white/5 transition-all cursor-pointer border-b border-border-subtle/50 last:border-0",
                            !notification.unread ? "bg-black/5 dark:bg-white/5 opacity-60 grayscale-[0.5]" : "bg-transparent"
                          )}
                        >
                          <div className={cn(
                            "mt-1 h-8 w-8 rounded-full flex items-center justify-center shrink-0",
                            notification.type === 'success' ? "bg-green-100 text-green-600 dark:bg-green-900/30 dark:text-green-400" :
                            notification.type === 'info' ? "bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400" :
                            "bg-black/5 text-foreground dark:bg-white/10 dark:text-foreground"
                          )}>
                            <Icon className="h-4 w-4" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex justify-between items-start gap-2">
                              <p className="text-sm font-medium text-heading truncate">{notification.title}</p>
                              <span className="text-[10px] text-foreground opacity-60 shrink-0 whitespace-nowrap">{notification.time}</span>
                            </div>
                            <p className="text-xs text-foreground opacity-70 mt-0.5 line-clamp-2">{notification.description}</p>
                          </div>
                          {notification.unread && (
                            <div className="w-2 h-2 rounded-full bg-primary mt-1.5 shrink-0" />
                          )}
                        </div>
                      );
                    })}
                  </div>
                ) : (
                  <div className="py-8 text-center px-4">
                    <Bell className="h-8 w-8 mx-auto text-foreground opacity-20 mb-2" />
                    <p className="text-sm text-foreground opacity-70">No new notifications</p>
                  </div>
                )}
              </div>
              <div className="border-t border-border-subtle p-2">
                <button className="w-full py-1.5 text-sm font-medium text-primary hover:text-primary-hover hover:bg-primary/5 rounded-md transition-colors cursor-pointer">
                  View All Notifications
                </button>
              </div>
            </motion.div>
          )}
          </AnimatePresence>
        </div>
        <div id="user-profile-menu" className="flex items-center gap-3 pl-4 border-l border-white/20 cursor-pointer hover:opacity-80 transition-opacity">
          <div className="text-right hidden sm:block">
            <p className="text-sm font-semibold text-white leading-none mb-1">Jane Doe</p>
            <p className="text-xs text-white/80 leading-none">HR Manager</p>
          </div>
          <div className="h-9 w-9 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white font-medium shadow-sm">
            JD
          </div>
        </div>
      </div>

    </header>
  );
}
