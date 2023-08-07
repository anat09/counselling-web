import { db, storage, config } from "./firebase";
import { addDoc, collection, doc, getDoc, getDocs, query, where } from 'firebase/firestore/lite';
import { getBytes, ref } from "firebase/storage";

export type BlogEntry = {
  description: string;
  name: string,
  header_image: string,
  created_on: Date,
  status: string,
  content: (BlogEntryImages | BlogEntryText)[];
  slug: string;
}

export type BlogEntryImages = {
  type: "images";
  value: string[];
}

export type BlogEntryText = {
  type: "text";
  value: string;
}

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
  content: string;
  image: string;
  timestamp: number;
  title: string;
}


export const getBlogs = async (): Promise<BlogOverview[]> => {
  const snapshot = await getDocs(query(collection(db, 'blog'), where("status", "==", "published")));
  const promises = snapshot.docs.map(async (doc) => {
    const { content, created_on, description, header_image, name, slug } = doc.data();
    return {
      content: (content as (BlogEntryText | BlogEntryImages)[])[0].value as string,
      description,
      id: doc.id,
      thumbnail: `https://firebasestorage.googleapis.com/v0/b/${config.storageBucket}/o/${encodeURIComponent(header_image)}?alt=media`,
      title: name,
      timestamp: created_on.seconds*1000,
      slug
    }
  });
  return await Promise.all(promises);
}

export const getBlog = async (slug: string): Promise<BlogContent> => {
  const snapshot = await getDocs(query(collection(db, "blog"), where("slug", "==", slug)));
  if (snapshot.empty) {
    throw new Error('Blog does not exist');
  }
  const { content, created_on, header_image, name } = snapshot.docs[0].data();
  return {
    content: (content as (BlogEntryText | BlogEntryImages)[])[0].value as string,
    image: header_image,
    timestamp: created_on.seconds,
    title: name,
  }
}