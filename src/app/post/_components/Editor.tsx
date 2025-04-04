export function Editor() {
  return (
    <div className="w-full h-full">
      <textarea className="rounded-md w-full p-2 resize-none h-full">
      </textarea>
      <div className="text-right">
        <button className="text-sm border rounded-md p-2 cursor-pointer">Save</button>
      </div>
    </div>
  )
}