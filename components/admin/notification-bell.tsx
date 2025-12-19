'use client';

import { useState, useRef, useEffect } from 'react';
import { useNotifications } from '@/lib/notification-context';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Bell } from 'lucide-react';
import Link from 'next/link';

export function NotificationBell() {
  const { notifications, unreadCount } = useNotifications();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen]);

  return (
    <div className="relative" ref={dropdownRef}>
      <Button
        variant="ghost"
        size="icon"
        onClick={() => setIsOpen(!isOpen)}
        className="relative"
      >
        <Bell className="h-5 w-5" />
        {unreadCount > 0 && (
          <Badge
            variant="destructive"
            className="absolute -top-1 -right-1 h-5 w-5 rounded-full p-0 flex items-center justify-center text-xs"
          >
            {unreadCount > 9 ? '9+' : unreadCount}
          </Badge>
        )}
      </Button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-80 bg-card border rounded-lg shadow-lg z-50">
          <div className="p-4 border-b">
            <h3 className="font-semibold">Notifications</h3>
            <p className="text-xs text-muted-foreground">
              {unreadCount} unread
            </p>
          </div>

          <div className="max-h-96 overflow-y-auto">
            {notifications.length === 0 ? (
              <div className="p-8 text-center text-muted-foreground">
                No new notifications
              </div>
            ) : (
              notifications.slice(0, 10).map((notification) => (
                <Link
                  key={notification.id}
                  href={notification.link}
                  onClick={() => setIsOpen(false)}
                  className="block p-4 hover:bg-muted/50 border-b transition-colors"
                >
                  <div className="flex items-start gap-3">
                    <Bell className="h-4 w-4 text-primary mt-1" />
                    <div className="flex-1">
                      <p className="font-medium text-sm">{notification.title}</p>
                      <p className="text-xs text-muted-foreground">
                        {notification.message}
                      </p>
                      <p className="text-xs text-muted-foreground mt-1">
                        {notification.timestamp?.toDate().toLocaleString()}
                      </p>
                    </div>
                  </div>
                </Link>
              ))
            )}
          </div>

          {notifications.length > 0 && (
            <div className="p-2 border-t">
              <Link
                href="/mng-sys-k9x2p/contacts"
                onClick={() => setIsOpen(false)}
                className="block text-center text-sm text-primary hover:underline"
              >
                View all contacts
              </Link>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
