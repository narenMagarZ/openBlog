"use client";

import { EditorInterface, TagInterface } from "@/app/interfaces";
import Link from "next/link";
import { ChangeEvent, useEffect, useState } from "react";
import { Utils } from "@/app/_utils";
import { Tag } from "./Tag";
import { createPost } from "@/app/action";
import { PostEnum } from "@/app/enums";

export function Editor({style}: EditorInterface) {
  const [title, setTitle] = useState<string>("untitled");
  const [slug, setSlug] = useState<string>("");
  const [content, setContent] = useState<string>("");

  useEffect(() => {
    window.history.pushState({}, "", slug);
  }, [slug])

  useEffect(() => {
    const slug = Utils.slugify(title)
    setSlug(Utils.slugify(slug));
  }, [title])

  const [tags, setTags] = useState<TagInterface[]>([]);

  function handleContentChange(e: ChangeEvent<HTMLTextAreaElement>) {
    console.log(e.target.value)
  }

  async function handleSaveOrPublishPost(status: PostEnum) {
    await createPost({title: title, author: {name: "naren", isAnonymous: false}, tags: tags, content, status: status})
  }
  return (
    <div className="flex flex-col gap-2">
      <div className="w-full">
        <input placeholder={title} value={title} onChange={(e)=>setTitle(e.target.value)} className="bg-[#F5F5F5] rounded p-2 text-sm w-full" />
      </div>
      <Tag tags={tags} setTags={setTags} />
      <textarea onChange={handleContentChange} className={`${style}`}></textarea>
      <div className="flex items-center gap-2 justify-end">
        <button onClick={() => handleSaveOrPublishPost(PostEnum.draft)}  className="bg-[#f5f5f5] px-4 py-2 rounded text-xs cursor-pointer">Save</button>
        <button onClick={() => handleSaveOrPublishPost(PostEnum.published)}  className="bg-[#f5f5f5] px-4 py-2 rounded text-xs cursor-pointer">Publish</button>
        <Link href={`/post/preview/${slug}`} className="bg-[#f5f5f5] rounded px-4 py-2 text-xs" >Preview</Link>
      </div>
    </div>
  )
}