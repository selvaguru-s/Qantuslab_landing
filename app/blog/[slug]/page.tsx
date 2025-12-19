import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { getPostBySlug, getPostSlugs } from "@/lib/blog";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar, Clock, User } from "lucide-react";

// Force dynamic rendering to support blog posts created after deployment
export const dynamic = 'force-dynamic';

interface Props {
  params: { slug: string };
}

export async function generateStaticParams() {
  const slugs = await getPostSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = await getPostBySlug(params.slug);

  if (!post) {
    return {
      title: "Post Not Found - AI Solutions",
    };
  }

  return {
    title: `${post.title} - AI Solutions Blog`,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }: Props) {
  const post = await getPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="py-20">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl">
          {/* Back Link */}
          <Button variant="ghost" asChild className="mb-8">
            <Link href="/blog">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Blog
            </Link>
          </Button>

          {/* Header */}
          <header className="mb-8">
            <div className="mb-4">
              <span className="rounded-full bg-muted px-3 py-1 text-sm font-medium">
                {post.category}
              </span>
            </div>
            <h1 className="mb-4 text-3xl font-bold md:text-4xl">{post.title}</h1>
            <div className="flex flex-wrap gap-4 text-muted-foreground">
              <div className="flex items-center gap-1">
                <User className="h-4 w-4" />
                <span>{post.author}</span>
              </div>
              <div className="flex items-center gap-1">
                <Calendar className="h-4 w-4" />
                <span>
                  {new Date(post.date).toLocaleDateString("en-US", {
                    month: "long",
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
          </header>

          {/* Content */}
          <article className="prose prose-neutral max-w-none dark:prose-invert">
            {post.content.split("\n").map((paragraph, index) => {
              const trimmed = paragraph.trim();
              if (!trimmed) return null;

              if (trimmed.startsWith("# ")) {
                return (
                  <h1 key={index} className="text-3xl font-bold mt-8 mb-4">
                    {trimmed.slice(2)}
                  </h1>
                );
              }
              if (trimmed.startsWith("## ")) {
                return (
                  <h2 key={index} className="text-2xl font-bold mt-8 mb-4">
                    {trimmed.slice(3)}
                  </h2>
                );
              }
              if (trimmed.startsWith("### ")) {
                return (
                  <h3 key={index} className="text-xl font-semibold mt-6 mb-3">
                    {trimmed.slice(4)}
                  </h3>
                );
              }
              if (trimmed.startsWith("- ")) {
                return (
                  <li key={index} className="ml-4">
                    {trimmed.slice(2)}
                  </li>
                );
              }
              if (trimmed.match(/^\d+\.\s/)) {
                return (
                  <li key={index} className="ml-4 list-decimal">
                    {trimmed.replace(/^\d+\.\s/, "")}
                  </li>
                );
              }
              if (trimmed.startsWith("**") && trimmed.endsWith("**")) {
                return (
                  <p key={index} className="font-semibold my-4">
                    {trimmed.slice(2, -2)}
                  </p>
                );
              }

              return (
                <p key={index} className="my-4 text-muted-foreground leading-relaxed">
                  {trimmed}
                </p>
              );
            })}
          </article>

          {/* CTA */}
          <div className="mt-12 rounded-xl bg-muted p-8 text-center">
            <h3 className="mb-2 text-xl font-semibold">
              Ready to implement these ideas?
            </h3>
            <p className="mb-4 text-muted-foreground">
              Let&apos;s discuss how AI can transform your business.
            </p>
            <Button asChild>
              <Link href="/contact">Get in Touch</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
