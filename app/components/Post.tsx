"use client";
import { PostWithCommentsProps } from "@/lib/types";
import Image from "next/image";
import { useState } from "react";
import Comments from "./Comments";

export default function Post({ post }: PostWithCommentsProps) {
  // destructure  all the keys
  const { name, title, body, comments } = post;

  const [seeComments, setSeeComments] = useState(false);

  return (
    <>
      <div className="mx-auto flex-col rounded-md bg-white p-4 mb-4">
        <div className="w-full">
          <div className="flex flex-col gap-2">
            <h1 className="font-bold">{name}</h1>
            <h5 className="text-gray-700">{title}</h5>
            <p className="text-gray-600">{body}</p>
          </div>
          <div
            className="mt-4 flex cursor-pointer transition duration-700 delay-150 ease-in-out hover:delay-300"
            onClick={() => setSeeComments(!seeComments)}
          >
            <Image
              className="inline"
              src="/assets/comment.svg"
              alt="Search"
              width="25"
              height="30"
            />
            <p className="ms-1">{comments?.length}</p>
          </div>
        </div>
      </div>
      {seeComments && (
        <div className="mt-5 ml-8 border-l-2 border-emerald-400">
          {comments.map((comment) => (
            <Comments key={comment.id} comment={comment} />
          ))}
        </div>
      )}
    </>
  );
}
