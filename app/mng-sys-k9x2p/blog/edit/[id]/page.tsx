'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { doc, getDoc, updateDoc, deleteDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '@/lib/firebase';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { ArrowLeft, Save, FileText, Trash2 } from 'lucide-react';
import Link from 'next/link';

interface Props {
  params: { id: string };
}

export default function EditBlogPostPage({ params }: Props) {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);
  const [loading, setLoading] = useState(true);
  const [formData, setFormData] = useState({
    title: '',
    slug: '',
    excerpt: '',
    content: '',
    author: '',
    category: '',
    readTime: '',
    date: '',
    published: false,
  });

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const docRef = doc(db, 'posts', params.id);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          const data = docSnap.data();
          setFormData({
            title: data.title || '',
            slug: data.slug || '',
            excerpt: data.excerpt || '',
            content: data.content || '',
            author: data.author || '',
            category: data.category || '',
            readTime: data.readTime || '',
            date: data.date || '',
            published: data.published || false,
          });
        } else {
          alert('Blog post not found');
          router.push('/mng-sys-k9x2p/blog');
        }
      } catch (error) {
        console.error('Error fetching blog post:', error);
        alert('Error loading blog post');
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
  }, [params.id, router]);

  const handleSubmit = async (e: React.FormEvent, publish: boolean) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Validate required fields
      if (!formData.title || !formData.slug || !formData.excerpt || !formData.content) {
        alert('Please fill in all required fields');
        setIsSubmitting(false);
        return;
      }

      const docRef = doc(db, 'posts', params.id);
      await updateDoc(docRef, {
        ...formData,
        published: publish,
        updatedAt: serverTimestamp(),
      });

      router.push('/mng-sys-k9x2p/blog');
    } catch (error) {
      console.error('Error updating blog post:', error);
      alert('There was an error updating the blog post. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleDelete = async () => {
    if (!confirm('Are you sure you want to delete this blog post? This action cannot be undone.')) {
      return;
    }

    setIsDeleting(true);

    try {
      const docRef = doc(db, 'posts', params.id);
      await deleteDoc(docRef);
      router.push('/mng-sys-k9x2p/blog');
    } catch (error) {
      console.error('Error deleting blog post:', error);
      alert('There was an error deleting the blog post. Please try again.');
      setIsDeleting(false);
    }
  };

  if (loading) {
    return (
      <div className="container mx-auto p-8">
        <div className="flex items-center justify-center min-h-[400px]">
          <div className="text-lg text-muted-foreground">Loading blog post...</div>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <Button variant="ghost" asChild className="mb-4">
            <Link href="/mng-sys-k9x2p/blog">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Blog Posts
            </Link>
          </Button>
          <div className="flex items-center justify-between">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <FileText className="h-8 w-8 text-primary" />
                <h1 className="text-4xl font-bold">Edit Blog Post</h1>
              </div>
              <p className="text-muted-foreground">
                Update and manage your blog post
              </p>
            </div>
            <Button
              variant="destructive"
              onClick={handleDelete}
              disabled={isDeleting}
            >
              <Trash2 className="mr-2 h-4 w-4" />
              {isDeleting ? 'Deleting...' : 'Delete'}
            </Button>
          </div>
        </div>

        {/* Form */}
        <Card>
          <CardHeader>
            <CardTitle>Post Details</CardTitle>
          </CardHeader>
          <CardContent>
            <form className="space-y-6">
              {/* Title */}
              <div className="space-y-2">
                <Label htmlFor="title">
                  Title <span className="text-red-500">*</span>
                </Label>
                <Input
                  id="title"
                  placeholder="Enter blog post title"
                  value={formData.title}
                  onChange={(e) =>
                    setFormData({ ...formData, title: e.target.value })
                  }
                  required
                />
              </div>

              {/* Slug */}
              <div className="space-y-2">
                <Label htmlFor="slug">
                  Slug <span className="text-red-500">*</span>
                </Label>
                <Input
                  id="slug"
                  placeholder="url-friendly-slug"
                  value={formData.slug}
                  onChange={(e) =>
                    setFormData({ ...formData, slug: e.target.value })
                  }
                  required
                />
                <p className="text-xs text-muted-foreground">
                  URL: /blog/{formData.slug || 'your-slug'}
                </p>
              </div>

              {/* Excerpt */}
              <div className="space-y-2">
                <Label htmlFor="excerpt">
                  Excerpt <span className="text-red-500">*</span>
                </Label>
                <Textarea
                  id="excerpt"
                  placeholder="Brief summary of the blog post (1-2 sentences)"
                  value={formData.excerpt}
                  onChange={(e) =>
                    setFormData({ ...formData, excerpt: e.target.value })
                  }
                  rows={3}
                  required
                />
              </div>

              {/* Content */}
              <div className="space-y-2">
                <Label htmlFor="content">
                  Content <span className="text-red-500">*</span>
                </Label>
                <Textarea
                  id="content"
                  placeholder="Write your blog post content here..."
                  value={formData.content}
                  onChange={(e) =>
                    setFormData({ ...formData, content: e.target.value })
                  }
                  rows={20}
                  className="font-mono text-sm"
                  required
                />
                <p className="text-xs text-muted-foreground">
                  Supports markdown-style formatting
                </p>
              </div>

              {/* Metadata Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Author */}
                <div className="space-y-2">
                  <Label htmlFor="author">Author</Label>
                  <Input
                    id="author"
                    placeholder="Author name"
                    value={formData.author}
                    onChange={(e) =>
                      setFormData({ ...formData, author: e.target.value })
                    }
                  />
                </div>

                {/* Category */}
                <div className="space-y-2">
                  <Label htmlFor="category">Category</Label>
                  <Input
                    id="category"
                    placeholder="e.g., AI Trends, Technology, Marketing"
                    value={formData.category}
                    onChange={(e) =>
                      setFormData({ ...formData, category: e.target.value })
                    }
                  />
                </div>

                {/* Date */}
                <div className="space-y-2">
                  <Label htmlFor="date">Publish Date</Label>
                  <Input
                    id="date"
                    type="date"
                    value={formData.date}
                    onChange={(e) =>
                      setFormData({ ...formData, date: e.target.value })
                    }
                  />
                </div>

                {/* Read Time */}
                <div className="space-y-2">
                  <Label htmlFor="readTime">Read Time</Label>
                  <Input
                    id="readTime"
                    placeholder="e.g., 5 min read"
                    value={formData.readTime}
                    onChange={(e) =>
                      setFormData({ ...formData, readTime: e.target.value })
                    }
                  />
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-3 pt-4 border-t">
                <Button
                  type="button"
                  variant="outline"
                  onClick={(e) => handleSubmit(e, false)}
                  disabled={isSubmitting}
                  className="flex-1"
                >
                  <Save className="mr-2 h-4 w-4" />
                  {isSubmitting ? 'Saving...' : 'Save as Draft'}
                </Button>
                <Button
                  type="button"
                  onClick={(e) => handleSubmit(e, true)}
                  disabled={isSubmitting}
                  className="flex-1"
                >
                  <FileText className="mr-2 h-4 w-4" />
                  {isSubmitting ? 'Publishing...' : 'Publish'}
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
