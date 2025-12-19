import { collection, query, where, orderBy, getDocs } from 'firebase/firestore';
import { db } from './firebase';

export interface BlogPost {
  id?: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  author: string;
  category: string;
  readTime: string;
  published: boolean;
}

export async function getAllPosts(): Promise<BlogPost[]> {
  try {
    const q = query(
      collection(db, 'posts'),
      where('published', '==', true),
      orderBy('date', 'desc')
    );

    const snapshot = await getDocs(q);
    return snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    })) as BlogPost[];
  } catch (error) {
    console.error('Error fetching blog posts:', error);
    return [];
  }
}

export async function getPostBySlug(slug: string): Promise<BlogPost | null> {
  try {
    const q = query(
      collection(db, 'posts'),
      where('slug', '==', slug),
      where('published', '==', true)
    );
    const snapshot = await getDocs(q);

    if (snapshot.empty) return null;

    const doc = snapshot.docs[0];
    return { id: doc.id, ...doc.data() } as BlogPost;
  } catch (error) {
    console.error('Error fetching blog post:', error);
    return null;
  }
}

export async function getPostSlugs(): Promise<string[]> {
  try {
    const posts = await getAllPosts();
    return posts.map((post) => post.slug);
  } catch (error) {
    console.error('Error fetching post slugs:', error);
    return [];
  }
}

// Admin functions to get all posts including drafts
export async function getAllPostsAdmin(): Promise<BlogPost[]> {
  try {
    const q = query(collection(db, 'posts'), orderBy('date', 'desc'));
    const snapshot = await getDocs(q);
    return snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    })) as BlogPost[];
  } catch (error) {
    console.error('Error fetching all blog posts:', error);
    return [];
  }
}

export async function getPostById(id: string): Promise<BlogPost | null> {
  try {
    const q = query(collection(db, 'posts'), where('__name__', '==', id));
    const snapshot = await getDocs(q);

    if (snapshot.empty) return null;

    const doc = snapshot.docs[0];
    return { id: doc.id, ...doc.data() } as BlogPost;
  } catch (error) {
    console.error('Error fetching blog post by ID:', error);
    return null;
  }
}
