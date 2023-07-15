import React, { useState, useEffect } from 'react';
import NewPost from '../components/NewPost/NewPost';
import Post from '../components/Post/Post';
import style from './Home.module.scss';

const News = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    // fetch news postings and set state
  }, []);

  return (
    <div className={style.feed}>
      <NewPost page='news'/>
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