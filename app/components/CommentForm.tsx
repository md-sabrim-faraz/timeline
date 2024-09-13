"use client";
import { usePostStore } from "@/lib/store";
import { useState } from "react";
import { Button } from "./ui/button";
import { Textarea } from "./ui/textarea";

export default function CommentForm({ postId }: { postId: string }) {
  const addComment = usePostStore((state) => state.addComment);

  const [comment, setComment] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log(comment.trim());

    if (comment.trim() === "") return;

    addComment(postId, comment);
  };

  return (
    <>
      <form
        className="mx-auto w-11/12 rounded-lg bg-white"
        onSubmit={handleSubmit}
      >
        <Textarea
          id="comment"
          name="comment"
          placeholder="Comment here..."
          className="h-24"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />

        <div className="flex justify-end mt-4">
          <Button type="submit" size="sm">
            Reply
          </Button>
        </div>
      </form>
    </>
  );
}
