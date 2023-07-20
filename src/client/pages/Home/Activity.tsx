import React, { useContext } from 'react';
import NewPost from '../components/NewPost/NewPost';
import Post from '../components/Post/Post';
import { PostObj } from '../../context/globalTypes';
import GlobalContext from '../../context/globalContext';
import style from './Home.module.scss';

const Activity = () => {
  const [state, dispatch] = useContext(GlobalContext);

  const posts: JSX.Element[] = [];

  for (const post of state.posts) {
    posts.push(<Post post={post} commentsEnabled={true}/>)
  }

  const handleSubmit = (e: React.FormEvent, post: string, setInput: Function) => {
    e.preventDefault();

    // get current date
    const date = new Date(Date.now());
    const today =
      (date.getMonth() + 1) + '/' +
      (date.getDate()) + '/' +
      (date.getFullYear());
    
    // new post object
    const newPost: PostObj = {
      author: state.user.name,
      date: today,
      post: post,
      comments: [],
    }

    // send news post to server with current user name and date
    dispatch({
      type: 'postAdded',
      post: newPost,
    });
    
    // reset new post input
    setInput('');
  };

  return (
    <div className={style.feed}>
      <NewPost handleSubmit={handleSubmit}/>
      {posts}
    </div>
  )
};

export default Activity;