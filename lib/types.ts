export interface PostProps {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export interface UserProps {
  id: number;
  name: string;
  username: string;
  email: string;
  address: Address;
  phone: string;
  website: string;
  company: Company[];
}

interface Address {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: Geo[];
}

interface Geo {
  lat: string;
  lng: string;
}

interface Company {
  name: string;
  catchPhrase: string;
  bs: string;
}

export interface UserProps {
  id: number;
  name: string;
  username: string;
  email: string;
  address: Address;
  phone: string;
  website: string;
  company: Company[];
}

export interface PostsWithNameAndCommentsProps {
  userId: number;
  id: number;
  title: string;
  body: string;
  name: string;
  comments: CommentsProps[];
}

export interface CommentsProps {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
}

export interface PostWithCommentsProps {
  post: PostsWithNameAndCommentsProps;
}

export interface CommentProps {
  comment: CommentsProps;
}
