"use client";
import { usePostStore } from "@/lib/store";
import NewCommentDialog from "./NewCommentDialog";
import Post from "./Post";

export default function HomePage() {
  const posts = usePostStore((state) => state.posts);
  console.log(posts);

  return (
    <>
      <section className="min-w-screen min-h-screen bg-lightGray py-8">
        <div className="mx-auto max-w-3xl mt-12">
          <NewCommentDialog />
          {posts.map((post) => (
            <Post key={post.id} post={post} />
          ))}
        </div>
      </section>
    </>
  );
}
