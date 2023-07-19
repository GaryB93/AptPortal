import React, { useContext } from 'react';
import NewPost from '../components/NewPost/NewPost';
import Post from '../components/Post/Post';
import GlobalContext from '../../context/globalContext';
import style from './Home.module.scss';

const Activity = () => {
  const [state, dispatch] = useContext(GlobalContext);

  const posts: JSX.Element[] = [];

  for (const post of state.posts) {
    posts.push(<Post post={post} commentsEnabled={true}/>)
  }

  const handleSubmit = (e: React.FormEvent, post: string) => {
    e.preventDefault();
    // add community post with current user's name and the current date
  };

  return (
    <div className={style.feed}>
      <NewPost handleSubmit={handleSubmit}/>
      {posts}
    </div>
  )
};

export default Activity;