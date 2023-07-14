import React from 'react';
import { Link } from 'react-router-dom';
import NewPost from '../components/NewPost/NewPost';
import style from './Home.module.scss';

const Activity = () => {
  return (
    <div className={style.feed}>
      <div className={style.links}>
        <Link to='' className={style.currentLink}>News</Link>
        <Link to='activity'>Activity</Link>
      </div>
      <NewPost />
    </div>
  )
};

export default Activity;