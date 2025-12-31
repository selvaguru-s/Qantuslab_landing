// lib/push-notifications.ts
export async function requestNotificationPermission(): Promise<string | null> {
  return null;
}

export function setupForegroundMessageHandler(
  _callback: (payload: any) => void
) {
  // no-op
}
