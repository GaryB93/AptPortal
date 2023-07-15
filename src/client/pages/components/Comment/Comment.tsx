import React from 'react';
import style from './Comment.module.scss';
import Author from '../Author/Author';

const Comment = ({ author, date, comment }:
  {
    author: string,
    date: string,
    comment: string
  }): JSX.Element => {
  return (
    <div className={style.comment}>
      <Author author={author} date={date} />
      <button>Delete</button>
      <p>
        {comment}
      </p>
    </div>
  )
};

export default Comment;