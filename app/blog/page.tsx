import { Metadata } from "next";
import Link from "next/link";
import { getAllPosts } from "@/lib/blog";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, Clock, User } from "lucide-react";

export const metadata: Metadata = {
  title: "Blog - AI Solutions",
  description:
    "Insights, trends, and guides on AI for business. Learn how to leverage AI to transform your operations.",
};

export default async function BlogPage() {
  const posts = await getAllPosts();

  return (
    <div className="py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <h1 className="mb-4 text-4xl font-bold md:text-5xl">Blog</h1>
          <p className="text-lg text-muted-foreground">
            Insights, trends, and practical guides on AI for business. Stay ahead
            of the curve with our latest thinking.
          </p>
        </div>

        {/* Posts Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`}>
              <Card className="h-full transition-all hover:shadow-lg">
                <CardHeader>
                  <div className="mb-2">
                    <span className="rounded-full bg-muted px-3 py-1 text-xs font-medium">
                      {post.category}
                    </span>
                  </div>
                  <CardTitle className="line-clamp-2 text-xl hover:text-primary">
                    {post.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-4 line-clamp-3 text-muted-foreground">
                    {post.excerpt}
                  </p>
                  <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <User className="h-4 w-4" />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      <span>
                        {new Date(post.date).toLocaleDateString("en-US", {
                          month: "short",
                          day: "numeric",
                          year: "numeric",
                        })}
                      </span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
