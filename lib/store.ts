import { v4 as uuidv4 } from "uuid";
import { create } from "zustand";
import { PostProps } from "./types";

export type State = {
  posts: PostProps[];
};

export type Actions = {
  addPost: (
    name: string,
    title: string,
    description: string,
    comment?: string[]
  ) => void;
};

export const usePostStore = create<State & Actions>((set) => ({
  posts: [],
  addPost: (
    name: string,
    title: string,
    description: string,
    comment?: string[]
  ) =>
    set((state) => ({
      posts: [
        ...state.posts,
        { id: uuidv4(), name, title, description, comment },
      ],
    })),
}));
