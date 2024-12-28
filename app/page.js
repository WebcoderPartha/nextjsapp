import { getPosts } from "@/lib/getPosts";


export default async function Home() {
  const all_posts = await getPosts();
  console.log(all_posts);
  return (
    <div className="border grid grid-cols-4 gap-2 px-4">
      <div>sdfsdf</div>
      <div>sdfsdf</div>
      <div>sdfsdf</div>
    </div>
  );
}
