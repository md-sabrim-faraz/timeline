import React from "react";
import getData from "@/lib/utils";
import Post from "./Post";
import {
  PostProps,
  PostsWithNameAndCommentsProps,
  UserProps,
} from "@/lib/types";

export default async function HomePage() {
  const posts: PostProps[] = await getData("/posts");

  const users: UserProps[] = await getData("/users");

  // get user's name and comments from posts

  const postsWithNameAndCommentsPromises = posts.map(async (post) => {
    const user = users.find((user) => user.id === post.userId);
    const comments = await getData(`/posts/${post.id}/comments`);
    // console.log(comments);

    return {
      ...post,
      name: user ? user.name : "Unknown",
      comments: comments ? comments : [],
    };
  });

  // Wait for all promises to resolve
  const postsWithNameAndComments: PostsWithNameAndCommentsProps[] =
    await Promise.all(postsWithNameAndCommentsPromises);

  console.log(postsWithNameAndComments);

  return (
    <>
      <section className="min-w-screen min-h-screen bg-lightGray py-8">
        <div className="mx-auto max-w-2xl">
          {postsWithNameAndComments.map((post) => (
            <Post key={post.id} post={post} />
          ))}
        </div>
      </section>
    </>
  );
}
