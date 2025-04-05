import { Card } from "@/app/_components";
import { PostInterface } from "@/app/interfaces";
// import { PostAction } from "@/app/action";

export default async function Page() {
  // const posts: PostInterface[] = await PostAction.getPosts();
  return (
    <div className="flex flex-col items-center justify-center gap-2">
      {
        // posts?.map((post, index) => (
        //   <Card key={index} { ...post} />
        // ))
      }
    </div>
  );
}
