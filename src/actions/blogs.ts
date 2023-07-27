import { db, storage, config } from "./firebase";
import { addDoc, collection, doc, getDoc, getDocs, query, where } from 'firebase/firestore/lite';
import { getBytes, ref } from "firebase/storage";

export type BlogOverview = {
  content: string
  description: string;
  id: string;
  slug: string;
  thumbnail: string;
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
  const promises = blogs.docs.map(async (doc) => {
    const { description, thumbnail, filename, title, date, slug } = doc.data();
    const bytes = await getBytes(ref(storage, filename));
    return {
      content: Buffer.from(bytes).toString('utf8'),
      description,
      id: doc.id,
      thumbnail: `https://firebasestorage.googleapis.com/v0/b/${config.storageBucket}/o/${encodeURIComponent(thumbnail)}?alt=media`,
      title,
      timestamp: date.seconds*1000,
      slug,
    }
  });
  return Promise.all(promises);
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