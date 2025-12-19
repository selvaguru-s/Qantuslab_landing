'use client';

import { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Bell, X } from 'lucide-react';
import { collection, query, where, onSnapshot } from 'firebase/firestore';
import { db } from '@/lib/firebase';
import type { Notification } from '@/lib/notifications';
import { isExpired } from '@/lib/notifications';

export function NotificationBell() {
  const [notifications, setNotifications] = useState<Notification[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [dismissed, setDismissed] = useState<string[]>([]);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Load dismissed notifications from localStorage
  useEffect(() => {
    const dismissedIds = localStorage.getItem('dismissed_notifications');
    if (dismissedIds) {
      try {
        setDismissed(JSON.parse(dismissedIds));
      } catch (error) {
        console.error('Error parsing dismissed notifications:', error);
      }
    }
  }, []);

  // Real-time listener for active notifications
  useEffect(() => {
    const q = query(collection(db, 'notifications'), where('active', '==', true));

    const unsubscribe = onSnapshot(q, (snapshot) => {
      const notifs = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      } as Notification));

      // Filter out expired notifications
      const activeNotifs = notifs.filter(n => !isExpired(n));
      setNotifications(activeNotifs);
    });

    return () => unsubscribe();
  }, []);

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

  const handleDismiss = (id: string) => {
    const newDismissed = [...dismissed, id];
    setDismissed(newDismissed);
    localStorage.setItem('dismissed_notifications', JSON.stringify(newDismissed));
  };

  // Filter out dismissed notifications
  const visibleNotifications = notifications.filter(n => !dismissed.includes(n.id!));
  const unreadCount = visibleNotifications.length;

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
            {visibleNotifications.length === 0 ? (
              <div className="p-8 text-center text-muted-foreground">
                No new notifications
              </div>
            ) : (
              visibleNotifications.map((notification) => (
                <div
                  key={notification.id}
                  className="p-4 hover:bg-muted/50 border-b transition-colors"
                >
                  <div className="flex items-start gap-3">
                    <Bell className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                    <div className="flex-1 min-w-0">
                      <p className="font-medium text-sm">{notification.title}</p>
                      <p className="text-xs text-muted-foreground mt-1">
                        {notification.message}
                      </p>
                      {notification.createdAt && (
                        <p className="text-xs text-muted-foreground mt-1">
                          {notification.createdAt.toDate().toLocaleString()}
                        </p>
                      )}
                    </div>
                    <button
                      onClick={() => handleDismiss(notification.id!)}
                      className="flex-shrink-0 text-muted-foreground hover:text-foreground"
                    >
                      <X className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      )}
    </div>
  );
}
