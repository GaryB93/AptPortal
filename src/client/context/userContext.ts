import { createContext } from 'react';
import { User, Post, Comment } from './globalTypes';

interface Action {
  type: string;
  payload: User
}

interface GlobalState {
  user: User;
  news: Post[];
  posts: Post[];
}

// initial state shows user is not logged in
export const globalState: GlobalState = {
  user: {
    name: '',
    isAdmin: false,
    email: '',
    community: '',
  },
  news: [],
  posts: [],
}

export const globalReducer = (state: GlobalState, action: Action) => {
  switch (action.type) {
    case 'loggedIn': {
      const user = action.payload;
      return {
        ...state,
        user: {name: user.name,
          isAdmin: user.isAdmin,
          email: user.email,
          community: user.community
        }
      }
    }
    case 'loggedOut': {
      return {
        user: {
          name: '',
          isAdmin: false,
          email: '',
          community: '',
        },
        news: [],
        posts: [],
      }
    }
    default: {
      throw Error('Unknown action: ' + action.type)
    }
  }
};

// create context to be able to pass down reducer and state
const GlobalContext = createContext(null);

export default GlobalContext;