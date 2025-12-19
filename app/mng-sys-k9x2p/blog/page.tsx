'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { getAllPostsAdmin } from '@/lib/blog';
import { BlogPost } from '@/lib/blog';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { FileText, Plus, Edit, Calendar, User, Clock } from 'lucide-react';

export default function BlogAdminPage() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      const postsData = await getAllPostsAdmin();
      setPosts(postsData);
      setLoading(false);
    };

    fetchPosts();
  }, []);

  if (loading) {
    return (
      <div className="container mx-auto p-8">
        <div className="flex items-center justify-center min-h-[400px]">
          <div className="text-lg text-muted-foreground">Loading blog posts...</div>
        </div>
      </div>
    );
  }

  const publishedCount = posts.filter((p) => p.published).length;
  const draftCount = posts.filter((p) => !p.published).length;

  return (
    <div className="container mx-auto p-8">
      <div className="mb-8">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h1 className="text-4xl font-bold mb-2">Blog Posts</h1>
            <p className="text-muted-foreground">
              Create and manage blog content for your website
            </p>
          </div>
          <Button asChild size="lg">
            <Link href="/mng-sys-k9x2p/blog/new">
              <Plus className="mr-2 h-5 w-5" />
              New Post
            </Link>
          </Button>
        </div>
        <div className="flex gap-4">
          <Badge variant="default" className="text-sm">
            {publishedCount} Published
          </Badge>
          <Badge variant="secondary" className="text-sm">
            {draftCount} Drafts
          </Badge>
        </div>
      </div>

      {posts.length === 0 ? (
        <Card>
          <CardContent className="flex flex-col items-center justify-center py-16">
            <FileText className="h-16 w-16 text-muted-foreground mb-4" />
            <p className="text-lg font-medium mb-2">No blog posts yet</p>
            <p className="text-sm text-muted-foreground mb-4">
              Get started by creating your first blog post
            </p>
            <Button asChild>
              <Link href="/mng-sys-k9x2p/blog/new">
                <Plus className="mr-2 h-4 w-4" />
                Create Post
              </Link>
            </Button>
          </CardContent>
        </Card>
      ) : (
        <div className="space-y-4">
          {posts.map((post) => (
            <Card
              key={post.id}
              className="transition-all duration-200 hover:shadow-md"
            >
              <CardHeader>
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <CardTitle className="text-xl">{post.title}</CardTitle>
                      <Badge
                        variant={post.published ? 'default' : 'secondary'}
                      >
                        {post.published ? 'Published' : 'Draft'}
                      </Badge>
                      <Badge variant="outline" className="text-xs">
                        {post.category}
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground line-clamp-2 mb-3">
                      {post.excerpt}
                    </p>
                    <div className="flex flex-wrap gap-4 text-xs text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <User className="h-3 w-3" />
                        <span>{post.author}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        <span>
                          {new Date(post.date).toLocaleDateString('en-US', {
                            month: 'short',
                            day: 'numeric',
                            year: 'numeric',
                          })}
                        </span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                  </div>
                  <Button asChild size="sm" variant="outline">
                    <Link href={`/mng-sys-k9x2p/blog/edit/${post.id}`}>
                      <Edit className="mr-2 h-4 w-4" />
                      Edit
                    </Link>
                  </Button>
                </div>
              </CardHeader>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}
