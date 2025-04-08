"use client";

import { EditorEngineModuleReturnInterface, EditorInterface, TagInterface } from "@/app/interfaces";
import Link from "next/link";
import { ChangeEvent, useEffect, useRef, useState } from "react";
import { Utils } from "@/app/_utils";
import { Tag } from "./Tag";
import { createPost } from "@/app/action";
import { Action } from "./Action";
import { ParserEngine } from "@/app/parserEngine";
import { ParserTaskContextInterface } from "@/app/parserEngine/parserTaskContextInterface";
import { PostEnum } from "@/app/enums";

export function Editor({style}: EditorInterface) {
  const [title, setTitle] = useState<string>("untitled");
  const [slug, setSlug] = useState<string>("");
  const [content, setContent] = useState<string>("");
  const [cursorPosition, setCursorPosition] = useState<{start: number; end: number;}>({start: 0, end: 0});
  const [tags, setTags] = useState<TagInterface[]>([]);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    window.history.pushState({}, "", slug);
  }, [slug])

  useEffect(() => {
    const slug = Utils.slugify(title)
    setSlug(Utils.slugify(slug));
  }, [title])


  function handleContentChange(e: ChangeEvent<HTMLTextAreaElement>) {
    setContent(e.currentTarget.value);
    setCursorPosition({start: e.currentTarget.selectionStart, end: e.currentTarget.selectionEnd});
  }

  async function handleCreatePost() {
    await createPost({
      title: title, 
      author: {name: "naren", isAnonymous: false}, 
      tags: tags, 
      content: content, 
      slug: slug,
      totalViewCount: 0,
      status: PostEnum.draft,
      meta: {},
      readTime: 0,
    });
  }

  function updateEditorData({cursorPosition, content}: EditorEngineModuleReturnInterface): void {
    setContent(content);
    setCursorPosition(cursorPosition);
    const textarea = textareaRef.current;
    if(textarea) {
      textarea.focus();
      setTimeout(()=> {
        textarea.setSelectionRange(cursorPosition.start, cursorPosition.end);
      }, 0);
    }
  }

  function updateCursorPosition() {
    if(textareaRef.current) {
      setCursorPosition({start: textareaRef.current.selectionStart, end: textareaRef.current.selectionEnd});
    }
  }

  return (
    <div className="flex flex-col gap-2">
      <div className=" bg-[#f5f5f5] rounded p-2">
        <div className="w-full">
          <input placeholder={"New post title here..."} value={title} onChange={(e)=>setTitle(e.target.value)} className="outline-none rounded text-xl font-bold w-full" />
        </div>
        <Tag tags={tags} setTags={setTags} />
        <Action content={content} currentCursorPosition={cursorPosition} updateEditorData={updateEditorData} />
        <textarea 
        onClick={updateCursorPosition}
        ref={textareaRef} value={content} placeholder="Write post content here..." onChange={handleContentChange} className={`${style} focus:outline-none font-medium`}></textarea>
      </div>
      <div className="flex items-center gap-2 justify-end">
        <button onClick={handleCreatePost} className="bg-[#f5f5f5] px-4 py-2 rounded text-xs cursor-pointer">Save</button>
        <Link href={`/post/preview/${slug}`} className="bg-[#f5f5f5] rounded px-4 py-2 text-xs" >Preview</Link>
      </div>
    </div>
  )
}