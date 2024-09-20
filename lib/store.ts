import { produce } from "immer";
import { v4 as uuidv4 } from "uuid";
import { create } from "zustand";
import { CommentsProps, PostProps } from "./types";

export type State = {
  posts: PostProps[];
};

export type Actions = {
  addPost: (
    name: string,
    title: string,
    description: string,
    comments?: CommentsProps[]
  ) => void;

  addComment: (postId: string, body: string) => void;
};

export const usePostStore = create<State & Actions>((set) => ({
  posts: [],

  addPost: (
    name: string,
    title: string,
    description: string,
    comments?: CommentsProps[]
  ) =>
    set(
      produce((state: State) => {
        state.posts.push({
          id: uuidv4(),
          name,
          title,
          description,
          comments,
        });
      })
    ),

  addComment: (postId, body) =>
    set(
      produce((state: State) => {
        const post = state.posts.find((post) => post.id === postId);
        if (post) {
          if (!post.comments) {
            post.comments = [];
          }
          post.comments.push({
            commentId: uuidv4(),
            body,
          });
        }
      })
    ),
}));
