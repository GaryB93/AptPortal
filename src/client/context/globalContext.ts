import { createContext } from 'react';
import { Action, GlobalState } from './globalTypes';

// initial state shows user is not logged in
export const globalState: GlobalState = {
  user: {
    name: '',
    isAdmin: false,
    email: '',
    community: '',
  },
  news: [
    {
      author: 'Gary Balogh',
      date: '07/17/23',
      post: 'This is news',
      comments: [],
    },
    {
      author: 'Gary Balogh',
      date: '07/18/23',
      post: 'This is news',
      comments: [],
    }
  ],
  posts: [
    {
      author: 'John Smith',
      date: '07/18/23',
      post: 'This is a community post',
      comments: [
        {
          author: 'Jane Doe',
          date: '07/18/23',
          comment: 'Oh here we go...'
        },
        {
          author: 'Jane Doe',
          date: '07/18/23',
          comment: 'Oh here we go...'
        },
        {
          author: 'Jane Doe',
          date: '07/18/23',
          comment: 'Oh here we go...'
        }
      ]
    }
  ],
}

export const globalReducer = (state: GlobalState, action: Action) => {
  switch (action.type) {
    case 'loggedIn': {
      const user = action.user;
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