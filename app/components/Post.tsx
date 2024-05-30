import { PostWithCommentsProps } from "@/lib/types";
import React from "react";

export default async function Post({ post }: PostWithCommentsProps) {
  // destructure  all the keys

  const { name, title, body, comments } = post;

  console.log(comments);

  return (
    <>
      <div className="mx-auto flex-col rounded-md bg-white p-4 mb-4">
        <div className="w-full">
          <div className="flex flex-col gap-2">
            <h1 className="font-bold">{name}</h1>
            <h5 className="text-gray-700">{title}</h5>
            <p className="text-gray-600">{body}</p>
          </div>
        </div>
      </div>
    </>
  );
}
