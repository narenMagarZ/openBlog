import Link from "next/link";
import { PostInterface } from "@/app/interfaces";

export function Card({title, author, tags, slug, createdAt}: PostInterface) {
  return (
    <div className="flex p-4 border rounded-md w-full max-w-[600px] text-white">
      <div>

      </div>
      <div>
        <div>
          <span>{author.name}</span>
        </div>
        <div>
          <Link className="text-lg" href={`/post/${slug}`}>{title}</Link>
          <div className="flex items-center gap-2 text-sm">
            {
              tags.map((tag, index) => (
                <button className="cursor-pointer" key={index} >#{tag.label}</button>
              ))
            }
          </div>
        </div>
      </div>
    </div>
  )
}