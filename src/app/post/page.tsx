"use client";
import { useState } from "react";
import { Editor, Preview } from "./_components";

export default function Page() {
  const [isEditMode, setIsEditMode] = useState<boolean>(true);
  return(
    <div className="flex flex-col items-center justify-center w-full gap-4">
      <div className="flex items-center gap-2">
        <button className="border rounded p-2 text-sm cursor-pointer px-4" onClick={() => setIsEditMode(true)}>Edit</button>
        <button className="border rounded p-2 text-sm cursor-pointer px-4" onClick={() => setIsEditMode(false)}>Preview</button>
      </div>
      <div className="w-full border max-w-160 rounded-md flex justify-center h-180">
        { isEditMode ? <Editor/> : <Preview/> }
      </div>
    </div>
  )
}