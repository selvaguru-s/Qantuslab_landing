'use client';

import Link from 'next/link';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Mail, FileText, Users } from 'lucide-react';

export default function AdminDashboardPage() {
  const cards = [
    {
      title: 'Contact Submissions',
      description: 'View and manage form submissions',
      icon: Mail,
      href: '/mng-sys-k9x2p/contacts',
      color: 'text-blue-600',
    },
    {
      title: 'Blog Posts',
      description: 'Create and manage blog content',
      icon: FileText,
      href: '/mng-sys-k9x2p/blog',
      color: 'text-purple-600',
    },
    {
      title: 'Public Site',
      description: 'View your live website',
      icon: Users,
      href: '/',
      color: 'text-green-600',
    },
  ];

  return (
    <div className="container mx-auto p-8">
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-2">Dashboard</h1>
        <p className="text-muted-foreground">
          Welcome to your Qantuslab admin dashboard
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {cards.map((card) => (
          <Link key={card.href} href={card.href}>
            <Card className="hover:shadow-lg transition-all duration-200 hover:scale-105 cursor-pointer h-full">
              <CardHeader>
                <div className={`${card.color} mb-2`}>
                  <card.icon className="h-8 w-8" />
                </div>
                <CardTitle>{card.title}</CardTitle>
                <CardDescription>{card.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline" size="sm">
                  Open →
                </Button>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
