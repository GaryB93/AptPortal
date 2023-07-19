export interface Action {
  type: string;
  user?: User
}

export interface GlobalState {
  user: User;
  news: Post[];
  posts: Post[];
}

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