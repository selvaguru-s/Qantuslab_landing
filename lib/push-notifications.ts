import { getMessagingInstance } from './firebase';
import { getToken, onMessage } from 'firebase/messaging';

const VAPID_KEY = process.env.NEXT_PUBLIC_FIREBASE_VAPID_KEY;

export async function requestNotificationPermission() {
  try {
    // Check if already granted
    if (Notification.permission === 'granted') {
      return await getOrRefreshToken();
    }

    // Don't ask if user already denied
    if (Notification.permission === 'denied') {
      console.log('Notification permission was denied by user');
      return null;
    }

    const permission = await Notification.requestPermission();

    if (permission === 'granted') {
      return await getOrRefreshToken();
    }

    return null;
  } catch (error) {
    console.error('Error getting notification permission:', error);
    return null;
  }
}

async function getOrRefreshToken() {
  const messaging = await getMessagingInstance();
  if (!messaging) return null;

  const token = await getToken(messaging, {
    vapidKey: VAPID_KEY,
  });

  // Save token to localStorage (for anonymous users)
  localStorage.setItem('fcm_token', token);

  return token;
}

export async function setupForegroundMessageHandler(callback: (payload: any) => void) {
  const messaging = await getMessagingInstance();
  if (!messaging) return;

  onMessage(messaging, (payload) => {
    console.log('Foreground message received:', payload);
    callback(payload);
  });
}
