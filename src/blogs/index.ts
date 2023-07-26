import { db, storage } from "./firebase";
import { addDoc, collection, doc, getDoc, getDocs, query, where } from 'firebase/firestore/lite';
import { getBytes, ref } from "firebase/storage";

export type BlogOverview = {
  description: string;
  id: string;
  slug: string;
  timestamp: number;
  title: string;
}

export type BlogContent = {
  content: string
  timestamp: number;
  title: string;
}

export const getBlogs = async (): Promise<BlogOverview[]> => {
  const blogs = await getDocs(collection(db, 'blogs'));
  return blogs.docs.map((doc) => {
    const { description, title, date, slug } = doc.data();
    return {
      description,
      id: doc.id,
      title,
      timestamp: date.seconds,
      slug,
    }
  });
}

export const getBlog = async (slug: string): Promise<BlogContent> => {
  const snapshot = await getDocs(query(collection(db, "blogs"), where("slug", "==", slug)));
  if (snapshot.empty) {
    throw new Error('Blog does not exist');
  }
  const { title, date, filename } = snapshot.docs[0].data();
  const bytes = await getBytes(ref(storage, filename));
  return {
    title,
    content: Buffer.from(bytes).toString('utf8'),
    timestamp: date.seconds,
  }
}