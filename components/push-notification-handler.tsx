'use client';

import { useEffect } from 'react';
import { requestNotificationPermission, setupForegroundMessageHandler } from '@/lib/push-notifications';

export function PushNotificationHandler() {
  useEffect(() => {
    // Request notification permission after a short delay (don't annoy users immediately)
    const timer = setTimeout(() => {
      requestNotificationPermission().then((token) => {
        if (token) {
          console.log('✅ Push notifications enabled');
          console.log('FCM Token:', token);
        }
      }).catch((error) => {
        console.log('Push notifications not available:', error);
      });

      // Setup foreground message handler
      setupForegroundMessageHandler((payload) => {
        console.log('🔔 New notification received:', payload);

        // Show browser notification even when page is open
        if (payload.notification) {
          new Notification(payload.notification.title, {
            body: payload.notification.body,
            icon: '/icon.png',
            tag: 'qantuslab-notification',
          });
        }
      });
    }, 3000); // 3 second delay

    return () => clearTimeout(timer);
  }, []);

  return null; // This component doesn't render anything
}
