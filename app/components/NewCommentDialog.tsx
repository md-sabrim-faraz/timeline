"use client";
import { usePostStore } from "@/lib/store";
import React from "react";
import { Button } from "./ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";

export default function NewCommentDialog() {
  const addPost = usePostStore((state) => state.addPost);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;

    const formData = new FormData(form);

    const { name, title, description } = Object.fromEntries(formData);

    console.log(name);
    console.log(title);
    console.log(description);

    if (
      typeof name !== "string" ||
      name === "" ||
      typeof title !== "string" ||
      title === "" ||
      typeof description !== "string" ||
      description === ""
    )
      return;

    addPost(name, title, description);
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="secondary" size="sm">
          + Add New Post
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Post something in your timeline!</DialogTitle>
          {/* <DialogDescription>
            Post something in your timeline!
          </DialogDescription> */}
        </DialogHeader>
        <form
          id="todo-form"
          className="grid gap-4 py-4"
          onSubmit={handleSubmit}
        >
          <div className="grid grid-cols-4 items-center gap-4">
            <Input
              id="name"
              name="name"
              placeholder="name..."
              className="col-span-4"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Input
              id="title"
              name="title"
              placeholder="title..."
              className="col-span-4"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Textarea
              id="description"
              name="description"
              placeholder="Description"
              className="col-span-4"
            />
          </div>
        </form>
        <DialogFooter>
          <DialogTrigger asChild>
            <Button type="submit" size="sm" form="todo-form">
              post
            </Button>
          </DialogTrigger>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
