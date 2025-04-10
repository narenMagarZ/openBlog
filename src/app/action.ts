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

  const parserEngine = new ParserEngine();
  parserEngine.registerTasks();
  const parserTaskContext = new ParserTaskContextInterface(content!),
  result = parserEngine.executeTasks("1", parserTaskContext);

  const db = FirebaseServiceFactory.create(firebaseServiceTypeEnum.firestore, app),
  lastPostCounter = await db.getPostCounter();
  await db.write({
    id: lastPostCounter.toString(),
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