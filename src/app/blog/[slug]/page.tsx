import { Title } from "./_components";

export default async function Page({params}: { params: Promise<{slug: string}>}) {

  return(
    <div>
      <Title title="This is a blog title" />
      
    </div>
  )
}