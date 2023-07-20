export interface Action {
  type: string;
  user?: User;
  news?: PostObj;
  post?: string;
  comment?: string;
}

export interface GlobalState {
  user: User;
  news: PostObj[];
  posts: PostObj[];
}

export interface User {
  name: string;
  isAdmin: boolean;
  email: string;
  community: string;
}

export interface PostObj {
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