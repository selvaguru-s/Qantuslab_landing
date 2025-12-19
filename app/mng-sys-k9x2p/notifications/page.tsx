'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { getAllNotifications, deleteNotification, updateNotification, isExpired, getTimeRemaining } from '@/lib/notifications';
import type { Notification } from '@/lib/notifications';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Bell, Plus, Edit, Trash2, Calendar, Clock } from 'lucide-react';

export default function NotificationsAdminPage() {
  const [notifications, setNotifications] = useState<Notification[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchNotifications();
  }, []);

  const fetchNotifications = async () => {
    const notifs = await getAllNotifications();
    setNotifications(notifs);
    setLoading(false);
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this notification?')) return;

    try {
      await deleteNotification(id);
      setNotifications(notifications.filter(n => n.id !== id));
    } catch (error) {
      console.error('Error deleting notification:', error);
      alert('Failed to delete notification');
    }
  };

  const handleToggleActive = async (id: string, currentActive: boolean) => {
    try {
      await updateNotification(id, { active: !currentActive });
      setNotifications(notifications.map(n =>
        n.id === id ? { ...n, active: !currentActive } : n
      ));
    } catch (error) {
      console.error('Error updating notification:', error);
      alert('Failed to update notification');
    }
  };

  if (loading) {
    return (
      <div className="container mx-auto p-8">
        <div className="flex items-center justify-center min-h-[400px]">
          <div className="text-lg text-muted-foreground">Loading notifications...</div>
        </div>
      </div>
    );
  }

  const activeCount = notifications.filter((n) => n.active && !isExpired(n)).length;
  const inactiveCount = notifications.filter((n) => !n.active).length;
  const expiredCount = notifications.filter((n) => isExpired(n)).length;

  return (
    <div className="container mx-auto p-8">
      <div className="mb-8">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h1 className="text-4xl font-bold mb-2">Notifications</h1>
            <p className="text-muted-foreground">
              Create and manage user notifications for your website
            </p>
          </div>
          <Button asChild size="lg">
            <Link href="/mng-sys-k9x2p/notifications/new">
              <Plus className="mr-2 h-5 w-5" />
              New Notification
            </Link>
          </Button>
        </div>
        <div className="flex gap-4">
          <Badge variant="default" className="text-sm">
            {activeCount} Active
          </Badge>
          <Badge variant="secondary" className="text-sm">
            {inactiveCount} Inactive
          </Badge>
          <Badge variant="destructive" className="text-sm">
            {expiredCount} Expired
          </Badge>
        </div>
      </div>

      {notifications.length === 0 ? (
        <Card>
          <CardContent className="flex flex-col items-center justify-center py-16">
            <Bell className="h-16 w-16 text-muted-foreground mb-4" />
            <p className="text-lg font-medium mb-2">No notifications yet</p>
            <p className="text-sm text-muted-foreground mb-4">
              Get started by creating your first notification
            </p>
            <Button asChild>
              <Link href="/mng-sys-k9x2p/notifications/new">
                <Plus className="mr-2 h-4 w-4" />
                Create Notification
              </Link>
            </Button>
          </CardContent>
        </Card>
      ) : (
        <div className="space-y-4">
          {notifications.map((notification) => {
            const expired = isExpired(notification);

            return (
              <Card
                key={notification.id}
                className="transition-all duration-200 hover:shadow-md"
              >
                <CardHeader>
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <CardTitle className="text-xl">{notification.title}</CardTitle>
                        <Badge variant={notification.active ? 'default' : 'secondary'}>
                          {notification.active ? 'Active' : 'Inactive'}
                        </Badge>
                        {expired && (
                          <Badge variant="destructive">Expired</Badge>
                        )}
                      </div>
                      <p className="text-sm text-muted-foreground line-clamp-2 mb-3">
                        {notification.message}
                      </p>
                      <div className="flex flex-wrap gap-4 text-xs text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Calendar className="h-3 w-3" />
                          <span>
                            {notification.createdAt
                              ? new Date(notification.createdAt.toDate()).toLocaleDateString('en-US', {
                                  month: 'short',
                                  day: 'numeric',
                                  year: 'numeric',
                                })
                              : 'Unknown'}
                          </span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="h-3 w-3" />
                          <span>{notification.expiresInHours}h expiry</span>
                        </div>
                        <div className={`flex items-center gap-1 ${expired ? 'text-destructive' : ''}`}>
                          <Clock className="h-3 w-3" />
                          <span>{getTimeRemaining(notification)}</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Button
                        asChild
                        size="sm"
                        variant="outline"
                      >
                        <Link href={`/mng-sys-k9x2p/notifications/edit/${notification.id}`}>
                          <Edit className="mr-2 h-4 w-4" />
                          Edit
                        </Link>
                      </Button>
                      <Button
                        size="sm"
                        variant={notification.active ? 'outline' : 'default'}
                        onClick={() => handleToggleActive(notification.id!, notification.active)}
                      >
                        {notification.active ? 'Deactivate' : 'Activate'}
                      </Button>
                      <Button
                        size="sm"
                        variant="destructive"
                        onClick={() => handleDelete(notification.id!)}
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </CardHeader>
              </Card>
            );
          })}
        </div>
      )}
    </div>
  );
}
