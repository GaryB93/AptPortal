import React from 'react';
import Author from '../Author/Author';
import style from './Post.module.scss';

const Post = ({ author, date, post }: 
  { author: string, date: string, post: string}) => {
  return (
    <div className={style.post}>
      <Author author={author} date={date}/>
      <button>Delete</button>
      <p>
        {post}
      </p>
    </div>
  )
};

export default Post;