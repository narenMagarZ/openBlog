// this page will have edit box, where user can edit his/her post
// user can make PR for his/her post with anonymously or using name
// this post will not be reflected to website until PR accepted by author of website
// "use client";
// import { Button } from "@/app/_components";
// import { useEffect, useState } from "react";
import { Editor } from "@/app/post/_components";

export default function Page() {
  return (
    <div className="flex items-center justify-center" >
      <div className="w-full flex items-center justify-center max-w-[600px] flex-col gap-2">
        <div className="w-full">
          <Editor style="w-full bg-[#f5f5f5] h-200 resize-none rounded p-2" slug="" /> 
        </div>
      </div>
    </div>
  )
}