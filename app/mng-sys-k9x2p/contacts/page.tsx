'use client';

import { useEffect, useState } from 'react';
import { collection, query, orderBy, onSnapshot, doc, updateDoc } from 'firebase/firestore';
import { db } from '@/lib/firebase';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Mail, Building2, Calendar } from 'lucide-react';

interface Contact {
  id: string;
  name: string;
  email: string;
  company: string | null;
  message: string;
  timestamp: any;
  status: 'new' | 'read';
}

export default function ContactsAdminPage() {
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const q = query(collection(db, 'contacts'), orderBy('timestamp', 'desc'));

    const unsubscribe = onSnapshot(q, (snapshot) => {
      const contactsData = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      })) as Contact[];
      setContacts(contactsData);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const markAsRead = async (id: string) => {
    try {
      await updateDoc(doc(db, 'contacts', id), { status: 'read' });
    } catch (error) {
      console.error('Error marking as read:', error);
    }
  };

  const markAsUnread = async (id: string) => {
    try {
      await updateDoc(doc(db, 'contacts', id), { status: 'new' });
    } catch (error) {
      console.error('Error marking as unread:', error);
    }
  };

  if (loading) {
    return (
      <div className="container mx-auto p-8">
        <div className="flex items-center justify-center min-h-[400px]">
          <div className="text-lg text-muted-foreground">Loading contact submissions...</div>
        </div>
      </div>
    );
  }

  const unreadCount = contacts.filter((c) => c.status === 'new').length;

  return (
    <div className="container mx-auto p-8">
      <div className="mb-8">
        <div className="flex items-center justify-between mb-2">
          <h1 className="text-4xl font-bold">Contact Submissions</h1>
          {unreadCount > 0 && (
            <Badge variant="default" className="text-sm">
              {unreadCount} Unread
            </Badge>
          )}
        </div>
        <p className="text-muted-foreground">
          View and manage form submissions from your website
        </p>
      </div>

      {contacts.length === 0 ? (
        <Card>
          <CardContent className="flex flex-col items-center justify-center py-16">
            <Mail className="h-16 w-16 text-muted-foreground mb-4" />
            <p className="text-lg font-medium mb-2">No contact submissions yet</p>
            <p className="text-sm text-muted-foreground">
              Form submissions will appear here when users contact you
            </p>
          </CardContent>
        </Card>
      ) : (
        <div className="space-y-4">
          {contacts.map((contact) => (
            <Card
              key={contact.id}
              className={`transition-all duration-200 ${
                contact.status === 'new'
                  ? 'border-primary shadow-md'
                  : 'hover:shadow-md'
              }`}
            >
              <CardHeader>
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <CardTitle className="text-xl">{contact.name}</CardTitle>
                      <Badge
                        variant={contact.status === 'new' ? 'default' : 'secondary'}
                      >
                        {contact.status === 'new' ? 'Unread' : 'Read'}
                      </Badge>
                    </div>
                    <div className="flex flex-col gap-2 text-sm text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <Mail className="h-4 w-4" />
                        <a
                          href={`mailto:${contact.email}`}
                          className="hover:text-primary transition-colors"
                        >
                          {contact.email}
                        </a>
                      </div>
                      {contact.company && (
                        <div className="flex items-center gap-2">
                          <Building2 className="h-4 w-4" />
                          <span>{contact.company}</span>
                        </div>
                      )}
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4" />
                        <span>
                          {contact.timestamp
                            ?.toDate()
                            .toLocaleString('en-US', {
                              year: 'numeric',
                              month: 'long',
                              day: 'numeric',
                              hour: '2-digit',
                              minute: '2-digit',
                            })}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="text-sm font-semibold mb-2">Message:</h4>
                    <p className="text-sm text-muted-foreground whitespace-pre-wrap">
                      {contact.message}
                    </p>
                  </div>
                  <div className="flex gap-2 pt-2">
                    {contact.status === 'new' ? (
                      <Button
                        size="sm"
                        onClick={() => markAsRead(contact.id)}
                        variant="default"
                      >
                        Mark as Read
                      </Button>
                    ) : (
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => markAsUnread(contact.id)}
                      >
                        Mark as Unread
                      </Button>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}
