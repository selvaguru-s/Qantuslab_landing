'use client';

import { AuthProvider, useAuth } from '@/lib/auth-context';
import { NotificationProvider } from '@/lib/notification-context';
import { ProtectedRoute } from '@/components/auth/protected-route';
import { NotificationBell } from '@/components/admin/notification-bell';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { LogOut, Menu, X } from 'lucide-react';
import { useState } from 'react';

function AdminNav() {
  const pathname = usePathname();
  const { signOut } = useAuth();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Don't show nav on login page
  if (pathname === '/mng-sys-k9x2p/login') return null;

  const navItems = [
    { href: '/mng-sys-k9x2p/dashboard', label: 'Dashboard' },
    { href: '/mng-sys-k9x2p/contacts', label: 'Contacts' },
    { href: '/mng-sys-k9x2p/blog', label: 'Blog' },
    { href: '/mng-sys-k9x2p/notifications', label: 'Notifications' },
  ];

  return (
    <nav className="border-b bg-card sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link
            href="/mng-sys-k9x2p/dashboard"
            className="font-bold text-xl text-primary"
          >
            Qantuslab Admin
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`text-sm font-medium transition-colors ${
                  pathname === item.href
                    ? 'text-primary'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                {item.label}
              </Link>
            ))}
            <NotificationBell />
            <Button onClick={signOut} variant="outline" size="sm">
              <LogOut className="h-4 w-4 mr-2" />
              Sign Out
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden pb-4">
            <div className="flex flex-col space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`px-3 py-2 rounded-md text-sm font-medium ${
                    pathname === item.href
                      ? 'text-primary bg-primary/10'
                      : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <div className="flex items-center justify-center py-2">
                <NotificationBell />
              </div>
              <Button
                onClick={() => {
                  signOut();
                  setMobileMenuOpen(false);
                }}
                variant="outline"
                size="sm"
                className="w-full"
              >
                <LogOut className="h-4 w-4 mr-2" />
                Sign Out
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

function AdminContent({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  // Don't protect the login page
  if (pathname === '/mng-sys-k9x2p/login') {
    return <main>{children}</main>;
  }

  // Protect all other admin pages
  return (
    <ProtectedRoute>
      <main>{children}</main>
    </ProtectedRoute>
  );
}

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <AuthProvider>
      <NotificationProvider>
        <div className="min-h-screen bg-background">
          <AdminNav />
          <AdminContent>{children}</AdminContent>
        </div>
      </NotificationProvider>
    </AuthProvider>
  );
}
