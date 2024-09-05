export interface CommentsProps {
  postId: string;
  body: string;
}

export interface SingleCommentProp {
  comment: CommentsProps;
}

export interface PostProps {
  id: string;
  name: string;
  title: string;
  description: string;
  comments?: CommentsProps[];
}
