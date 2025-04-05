'use server';

import { set, push, query, get } from "firebase/database";
import { DbRef } from "@/app/config";
import { InputPostInterface, PostInterface } from "@/app/interfaces";
import { Utils } from "@/app/_utils";
import { PostEnum } from "./enums";

export async function getPosts(): Promise<PostInterface[]> {
  const fetchQuery = query(DbRef.refs)
  const blogList : PostInterface[] = [];
  try {
    const snapshot = await get(fetchQuery)
    snapshot.forEach((childSnapshot: any) => {
      console.log(childSnapshot.val())
      blogList.push(childSnapshot.val());
    });
    return blogList;
  } catch (error: any) {
    throw new Error(`Failed to fetch posts: ${error.message}`);
  }
}

export async function createPost({title, author, tags, content}: Partial<InputPostInterface>): Promise<void> {
  const newPostRef = push(DbRef.refs);
  const createdAt = Date.now() // maintain utc date
  try {
    const slug = Utils.slugify(title!);
    await set(newPostRef, {
      id: 1,
      title: title,
      slug: slug,
      author: author,
      createdAt: createdAt,
      updatedAt: createdAt,
      tags: tags,
      content: content,
      status: PostEnum.draft
    });
  } catch (error: any) {
    throw new Error(`Failed to create post: ${error.message}`);
  }
}