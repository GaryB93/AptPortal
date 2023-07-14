import React from 'react';
import { Link } from 'react-router-dom';
import NewPost from '../components/NewPost/NewPost';
import Post from '../components/Post/Post';
import style from './Home.module.scss';

const News = () => {
  return (
    <div className={style.feed}>
      <div className={style.links}>
        <Link to='' className={style.currentLink}>News</Link>
        <Link to='activity'>Activity</Link>
      </div>
      <NewPost />
      <Post author='Gary Balogh' date='07/13/23' post='Post information here'/>
    </div>
  )
};

export default News;