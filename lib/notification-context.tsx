
'use client';

import { createContext, useContext, useEffect, useState } from 'react';
import { collection, query, where, onSnapshot } from 'firebase/firestore';
import { db } from './firebase';
import { useAuth } from './auth-context';
import { requestNotificationPermission, setupForegroundMessageHandler } from './push-notifications';

interface Notification {
  id: string;
  type: 'contact' | 'comment';
  title: string;
  message: string;
  link: string;
  timestamp: any;
  read: boolean;
}

interface NotificationContextType {
  notifications: Notification[];
  unreadCount: number;
  markAsRead: (id: string) => void;
  markAllAsRead: () => void;
}

const NotificationContext = createContext<NotificationContextType>({} as NotificationContextType);

export function NotificationProvider({ children }: { children: React.ReactNode }) {
  const [notifications, setNotifications] = useState<Notification[]>([]);
  const { user } = useAuth();

  useEffect(() => {
    if (!user) return;

    // Request push notification permission
    requestNotificationPermission().then((token) => {
      if (token) {
        console.log('FCM Token:', token);
        // Optionally save token to user profile in Firestore
      }
    });

    // Setup foreground message handler
    setupForegroundMessageHandler((payload) => {
      // Handle foreground notifications
      console.log('Received foreground notification:', payload);
      // Can show toast or update notification list
    });

    // Listen to new contact submissions
    const contactsQuery = query(
      collection(db, 'contacts'),
      where('status', '==', 'new')
    );

    const unsubscribe = onSnapshot(contactsQuery, (snapshot) => {
      const contactNotifications: Notification[] = snapshot.docs.map((doc) => ({
        id: doc.id,
        type: 'contact' as const,
        title: 'New Contact Submission',
        message: `${doc.data().name} sent a message`,
        link: '/mng-sys-k9x2p/contacts',
        timestamp: doc.data().timestamp,
        read: false,
      }));

      setNotifications(contactNotifications);
    });

    return () => unsubscribe();
  }, [user]);

  const unreadCount = notifications.filter((n) => !n.read).length;

  const markAsRead = (id: string) => {
    // This will be handled by marking contact as read in Firestore
  };

  const markAllAsRead = () => {
    // Mark all contacts as read
  };

  return (
    <NotificationContext.Provider
      value={{ notifications, unreadCount, markAsRead, markAllAsRead }}
    >
      {children}
    </NotificationContext.Provider>
  );
}

export const useNotifications = () => useContext(NotificationContext);
