import { collection, addDoc, updateDoc, deleteDoc, doc, query, where, getDocs, serverTimestamp, getDoc, orderBy } from 'firebase/firestore';
import { db } from './firebase';

export interface Notification {
  id?: string;
  title: string;
  message: string;
  createdAt: any;
  expiresInHours: number;
  active: boolean;
}

export async function createNotification(data: Omit<Notification, 'id' | 'createdAt'>) {
  const docRef = await addDoc(collection(db, 'notifications'), {
    ...data,
    createdAt: serverTimestamp(),
  });
  return docRef.id;
}

export async function getAllNotifications(): Promise<Notification[]> {
  const q = query(collection(db, 'notifications'), orderBy('createdAt', 'desc'));
  const snapshot = await getDocs(q);
  return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as Notification));
}

export async function getNotificationById(id: string): Promise<Notification | null> {
  const docRef = doc(db, 'notifications', id);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    return { id: docSnap.id, ...docSnap.data() } as Notification;
  }
  return null;
}

export async function getActiveNotifications(): Promise<Notification[]> {
  const q = query(collection(db, 'notifications'), where('active', '==', true), orderBy('createdAt', 'desc'));
  const snapshot = await getDocs(q);
  const notifications = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as Notification));

  // Filter out expired notifications
  return notifications.filter(n => !isExpired(n));
}

export async function updateNotification(id: string, data: Partial<Notification>) {
  await updateDoc(doc(db, 'notifications', id), data);
}

export async function deleteNotification(id: string) {
  await deleteDoc(doc(db, 'notifications', id));
}

export function isExpired(notification: Notification): boolean {
  if (!notification.createdAt) return false;
  const now = new Date();
  const created = notification.createdAt.toDate();
  const expiryDate = new Date(created.getTime() + notification.expiresInHours * 60 * 60 * 1000);
  return now > expiryDate;
}

export function getTimeRemaining(notification: Notification): string {
  if (!notification.createdAt) return 'Unknown';

  const now = new Date();
  const created = notification.createdAt.toDate();
  const expiryDate = new Date(created.getTime() + notification.expiresInHours * 60 * 60 * 1000);
  const remaining = expiryDate.getTime() - now.getTime();

  if (remaining <= 0) return 'Expired';

  const hours = Math.floor(remaining / (1000 * 60 * 60));
  const days = Math.floor(hours / 24);

  if (days > 0) return `${days} day${days > 1 ? 's' : ''} remaining`;
  if (hours > 0) return `${hours} hour${hours > 1 ? 's' : ''} remaining`;

  const minutes = Math.floor(remaining / (1000 * 60));
  return `${minutes} minute${minutes > 1 ? 's' : ''} remaining`;
}
