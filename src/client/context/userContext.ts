import { createContext } from 'react';

interface Action {
  type: string;
  payload: User
}

interface User {
  name: string;
  isAdmin: boolean;
  email: string;
  community: string;
}

// initial state shows user is not logged in
const user = {
  name: '',
  isAdmin: false,
  email: '',
  community: ''
}

const userReducer = (user: User, action: Action) => {
  switch (action.type) {
    case 'loggedIn': {
      const user = action.payload;
      return {
        name: user.name,
        isAdmin: user.isAdmin,
        email: user.email,
        community: user.community
      }
    }
    default: {
      throw Error('Unknown action: ' + action.type)
    }
  }
};

export default userReducer;