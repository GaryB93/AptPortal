
interface Payload {
  allNews?: [];
  newsId?: number;
  newsPost?: string;
}

interface Action {
  type: string;
  payload: Payload
}

const initialNews = [

];

const newsReducer = (news ,action: Action) => {
  switch (action.type) {
    case 'newsRetrieved': {

    }

    case 'newsAdded': {

    }

    case 'newsDeleted': {

    }
  }
};

export default newsReducer;