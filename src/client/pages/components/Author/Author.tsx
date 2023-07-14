import React from 'react';
import style from './Author.module.scss';

const Author = ({ author, date }:
  { author: string, date: string }) => {

  const initials = author[0] + author[author.indexOf(' ') + 1];

  return (
    <div className={style.author}>
      <div className={style.pic}>
        {initials}
      </div>
      <div className={style.name}>
        <span>{author}</span>
        <span>{date}</span>
      </div>
    </div>
  )
};

export default Author;