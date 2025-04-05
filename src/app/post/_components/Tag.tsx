"use client";

import { ChangeEvent, useState } from "react";
import { TagInterface } from "@/app/interfaces";

export function Tag({tags, setTags}: {tags: TagInterface[], setTags: React.Dispatch<React.SetStateAction<TagInterface[]>>}) {

  const [newTag, setNewTag] = useState<string>("");
  function handleInputChange(e: ChangeEvent<HTMLInputElement>) {
    const lastInputValue = e.currentTarget.value;
    setNewTag(lastInputValue)
    if (lastInputValue.trim().length > 0 && lastInputValue.charAt(lastInputValue.length - 1) === ' ' ) {
      setTags(prev => [...prev, {label: lastInputValue.trim()}]);
      setNewTag("");
    }
  }
  return (
    <div className="bg-[#f5f5f5] rounded p-2 flex gap-2 items-center flex-wrap">
      <div className="flex flex-wrap items-center gap-2 ">
        {
          tags.map(({label}, index ) => (
            <button className="border bg-[#e5e5e5] rounded text-xs px-2 py-1" key={index} >#{label}</button>
          ))
        }
      </div>
      <input value={newTag} onChange={handleInputChange} placeholder="Add tags here..." className="focus:outline-none text-sm" />
    </div>
  )
}