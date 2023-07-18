export interface User {
  name: string;
  isAdmin: boolean;
  email: string;
  community: string;
}

export interface Post {
  author: string;
  date: string;
  post: string;
  comments: Comment[];
}

export interface Comment {
  author: string;
  date: string;
  comment: string;
}