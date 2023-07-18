import React, { useState, useEffect, useContext } from 'react';
import NewPost from '../components/NewPost/NewPost';
import Post from '../components/Post/Post';
import GlobalContext from '../../context/userContext';
import style from './Home.module.scss';

const News = () => {
  const [news, setNews] = useState([]);
  const [state, dispatch] = useContext(GlobalContext);

  useEffect(() => {
    // fetch news postings and set state
    dispatch({
      type: 'loggedIn',
      payload: {
        name: 'Gary Balogh',
        isAdmin: false,
        email: 'gary@email.com',
        community: 'vista pointe'
      }
    });
  }, []);

  return (
    <div className={style.feed}>
      {state.user.isAdmin ? <NewPost page='news'/> : null}
      <Post
        author='Gary Balogh'
        date='07/13/23'
        post='Post information here'
        comments={[]}
      />
    </div>
  )
};

export default News;