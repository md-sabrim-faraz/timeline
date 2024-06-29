export type Comment = {
  id: string;
  name: string;
  comment: string;
  replies: string[];
};

export type State = {
  comments: Comment[];
};

export type Actions = {
  addComment: (name: string, comment: string) => void;
};
