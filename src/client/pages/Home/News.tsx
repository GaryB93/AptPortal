import React, { useEffect, useContext } from 'react';
import NewPost from '../components/NewPost/NewPost';
import Post from '../components/Post/Post';
import GlobalContext from '../../context/globalContext';
import style from './Home.module.scss';

const News = () => {
  const [state, dispatch] = useContext(GlobalContext);

  useEffect(() => {
    // fetch news postings and set state
    dispatch({
      type: 'loggedIn',
      user: {
        name: 'Gary Balogh',
        isAdmin: true,
        email: 'gary@email.com',
        community: 'vista pointe'
      }
    });
  }, []);

  const handleSubmit = (e: React.FormEvent, post: string) => {
    e.preventDefault();
    // send news post to server with current user name and date
  };

  const newsArr = [];
  // iterate through news array from global state to populate posts
  for (const news of state.news) {
    newsArr.push(<Post post={news} commentsEnabled={false}/>);
  }

  return (
    <div className={style.feed}>
      {state.user.isAdmin ? <NewPost handleSubmit={handleSubmit}/> : null}
      {newsArr}
    </div>
  )
};

export default News;