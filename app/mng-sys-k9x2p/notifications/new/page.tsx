'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { createNotification } from '@/lib/notifications';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import { ArrowLeft, Save } from 'lucide-react';

export default function NewNotificationPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    message: '',
    expiresInHours: 24,
    active: true,
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.title || !formData.message) {
      alert('Please fill in all required fields');
      return;
    }

    setLoading(true);

    try {
      await createNotification({
        title: formData.title,
        message: formData.message,
        expiresInHours: formData.expiresInHours,
        active: formData.active,
      });

      router.push('/mng-sys-k9x2p/notifications');
    } catch (error) {
      console.error('Error creating notification:', error);
      alert('Failed to create notification');
      setLoading(false);
    }
  };

  const presets = [
    { label: '24 hours', value: 24 },
    { label: '48 hours', value: 48 },
    { label: '72 hours', value: 72 },
    { label: '1 week', value: 168 },
  ];

  return (
    <div className="container mx-auto p-8">
      <div className="max-w-2xl mx-auto">
        <div className="mb-8">
          <Button variant="ghost" asChild className="mb-4">
            <Link href="/mng-sys-k9x2p/notifications">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Notifications
            </Link>
          </Button>
          <h1 className="text-4xl font-bold mb-2">New Notification</h1>
          <p className="text-muted-foreground">
            Create a new notification to display to all users
          </p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Notification Details</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="title">
                  Title <span className="text-destructive">*</span>
                </Label>
                <Input
                  id="title"
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  placeholder="e.g., New Feature Released!"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">
                  Message <span className="text-destructive">*</span>
                </Label>
                <Textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="e.g., Check out our new AI-powered search feature"
                  rows={4}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="expiresInHours">Expires In (Hours)</Label>
                <div className="flex gap-2 mb-2">
                  {presets.map((preset) => (
                    <Button
                      key={preset.value}
                      type="button"
                      variant={formData.expiresInHours === preset.value ? 'default' : 'outline'}
                      size="sm"
                      onClick={() => setFormData({ ...formData, expiresInHours: preset.value })}
                    >
                      {preset.label}
                    </Button>
                  ))}
                </div>
                <Input
                  id="expiresInHours"
                  type="number"
                  min="1"
                  value={formData.expiresInHours}
                  onChange={(e) => setFormData({ ...formData, expiresInHours: parseInt(e.target.value) || 24 })}
                />
                <p className="text-xs text-muted-foreground">
                  Notification will automatically disappear after this duration
                </p>
              </div>

              <div className="flex items-center space-x-2">
                <Checkbox
                  id="active"
                  checked={formData.active}
                  onCheckedChange={(checked) => setFormData({ ...formData, active: checked as boolean })}
                />
                <Label
                  htmlFor="active"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Active (show to users immediately)
                </Label>
              </div>

              <div className="flex gap-4 pt-4">
                <Button type="submit" disabled={loading} className="flex-1">
                  <Save className="mr-2 h-4 w-4" />
                  {loading ? 'Creating...' : 'Create Notification'}
                </Button>
                <Button type="button" variant="outline" asChild>
                  <Link href="/mng-sys-k9x2p/notifications">Cancel</Link>
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
