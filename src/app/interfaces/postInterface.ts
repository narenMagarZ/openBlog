import { PostStatusEnum } from "@/app/enums";
import { AuthorInterface } from "./authorInterface";
import { TagInterface } from "./tagInterface";

export interface PostInterface {
  title: string;
  author: AuthorInterface;
  tags: TagInterface[];
  meta: {};
  content: string;
  createdAt: Date;
  updatedAt: Date;
  status: PostStatusEnum;
  slug: string;
  readTime: number;
  totalViewCount: number;
  coverImage?: string;
}

export interface InputPostInterface extends PostInterface {
  id: string;
}