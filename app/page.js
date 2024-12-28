import { getPosts } from "@/lib/getPosts";

export default async function Home() {
  const posts = await getPosts();
  console.log(posts)
  return (
    <div className="grid grid-cols-4 gap-2 py-4">
      {posts.map((post) => (
        <div key={post.id} className="border px-2 py-2">
          <h2 className="text-sm font-semibold">{post.title}</h2>
         {post.tags.map((tag) => (<p key={tag}>{tag}</p>))}
        </div>  

      ))}
    </div>
  );
}
