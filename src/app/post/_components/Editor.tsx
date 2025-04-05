"use client";

import { EditorInterface, TagInterface } from "@/app/interfaces";
import Link from "next/link";
import { ChangeEvent, useEffect, useState } from "react";
import { Utils } from "@/app/_utils";
import { Tag } from "./Tag";
import { createPost } from "@/app/action";
import { Action } from "./Action";

export function Editor({style}: EditorInterface) {
  const [title, setTitle] = useState<string>("untitled");
  const [slug, setSlug] = useState<string>("");
  const [content, setContent] = useState<string>("");
  const [cursorPosition, setCursorPosition] = useState<number>(0);

  useEffect(() => {
    window.history.pushState({}, "", slug);
  }, [slug])

  useEffect(() => {
    const slug = Utils.slugify(title)
    setSlug(Utils.slugify(slug));
  }, [title])

  const [tags, setTags] = useState<TagInterface[]>([]);

  function handleContentChange(e: ChangeEvent<HTMLTextAreaElement>) {
    setContent(e.currentTarget.value);
    setCursorPosition(e.currentTarget.selectionEnd)
  }

  async function handleSaveOrPublishPost() {
    // current pos of cursor, content, editor engine => new content, new position of cursor
    // await createPost({title: title, author: {name: "naren", isAnonymous: false}, tags: tags, content})
  }

  function setBlogContent(content: string): void {
    console.log(content, 'from bold')
    setContent(content);
  }
  return (
    <div className="flex flex-col gap-2">
      <div className=" bg-[#f5f5f5] rounded p-2">
        <div className="w-full">
          <input placeholder={"New post title here..."} value={title} onChange={(e)=>setTitle(e.target.value)} className="outline-none rounded text-xl font-bold w-full" />
        </div>
        <Tag tags={tags} setTags={setTags} />
        <Action content={content} currentCursorPosition={cursorPosition} newCursorPosition={0} setContent={setBlogContent} />
        <textarea value={content} placeholder="Write post content here..." onChange={handleContentChange} className={`${style} focus:outline-none font-medium`}></textarea>
      </div>
      <div className="flex items-center gap-2 justify-end">
        <button onClick={handleSaveOrPublishPost} className="bg-[#f5f5f5] px-4 py-2 rounded text-xs cursor-pointer">Save</button>
        <Link href={`/post/preview/${slug}`} className="bg-[#f5f5f5] rounded px-4 py-2 text-xs" >Preview</Link>
      </div>
    </div>
  )
}