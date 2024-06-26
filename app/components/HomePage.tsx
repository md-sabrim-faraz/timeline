import {
  PostProps,
  PostsWithNameAndCommentsProps,
  UserProps,
} from "@/lib/types";
import getData from "@/lib/utils";
import Post from "./Post";

export default async function HomePage() {
  const posts: PostProps[] = await getData("/posts");

  // Sort the posts in descending order by ID
  const sortedPosts: PostProps[] = posts.sort((a, b) => b.id - a.id);

  const users: UserProps[] = await getData("/users");

  // get user's name and comments from posts

  const postsWithNameAndCommentsPromises = sortedPosts.map(async (post) => {
    const user = users.find((user) => user.id === post.userId);
    const comments = await getData(`/posts/${post.id}/comments`);

    return {
      ...post,
      name: user ? user.name : "Unknown",
      comments: comments ? comments : [],
    };
  });

  // Wait for all promises to resolve
  const postsWithNameAndComments: PostsWithNameAndCommentsProps[] =
    await Promise.all(postsWithNameAndCommentsPromises);

  return (
    <>
      <section className="min-w-screen min-h-screen bg-lightGray py-8">
        <div className="mx-auto max-w-3xl mt-12">
          {postsWithNameAndComments.map((post) => (
            <Post key={post.id} post={post} />
          ))}
        </div>
      </section>
    </>
  );
}
