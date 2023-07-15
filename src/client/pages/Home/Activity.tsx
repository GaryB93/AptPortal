import React from 'react';
import NewPost from '../components/NewPost/NewPost';
import Post from '../components/Post/Post';
import style from './Home.module.scss';

const Activity = () => {

  const commentsArr = [
    {
      author: 'Jane Smith',
      date: '07/14/23',
      comment: 'This is a comment'
    }
  ];

  return (
    <div className={style.feed}>
      <NewPost page='community'/>
      <Post
        author='Gary Balogh'
        date='07/13/23'
        post='We are on the community page'
        comments={commentsArr}/>
    </div>
  )
};

export default Activity;