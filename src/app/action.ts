'use server';

import { app } from "@/app/config";
import { InputPostInterface, PostInterface } from "@/app/interfaces";
import { Utils } from "@/app/_utils";
import { firebaseServiceTypeEnum, PostStatusEnum } from "./enums";
import { ParserEngine } from "./parserEngine";
import { ParserTaskContextInterface } from "./parserEngine/parserTaskContextInterface";
import { FirebaseServiceFactory } from "./factory";

export async function getPosts(): Promise<PostInterface[]> {
  const db = FirebaseServiceFactory.create(firebaseServiceTypeEnum.firestore, app);
  return db.read();
}

export async function createPost({title, author, tags, content }: Partial<InputPostInterface>): Promise<void> {
  const createdAt = new Date(Date.now()), // utc date
  slug = Utils.slugify(title!);

  const parserEngine = new ParserEngine(),
  parserTaskContext = new ParserTaskContextInterface(content!);

  parserEngine.registerTasks();

  const logId = Utils.generateId(),
  result = parserEngine.executeTasks(String(logId), parserTaskContext);

  const db = FirebaseServiceFactory.create(firebaseServiceTypeEnum.firestore, app),
  lastPostCounter = await db.getPostCounter(),
  newPostCounter = lastPostCounter + 1;
  
  await db.write({
    id: String(newPostCounter),
    title: title,
    author: author,
    tags: tags,
    content: result.content,
    slug: slug,
    createdAt: createdAt,
    updatedAt: createdAt,
    status: PostStatusEnum.draft
  });
}