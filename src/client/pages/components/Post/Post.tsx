import React from 'react';
import Author from '../Author/Author';
import Comment from '../Comment/Comment';
import style from './Post.module.scss';

// comment structure
interface Comment {
  author: string;
  date: string;
  comment: string;
}

const Post = ({ author, date, post, comments }: 
  { author: string, date: string, post: string, comments: Comment[]}) => {
  
    const commentArr:JSX.Element[] = [];

    for (const curr of comments) {
      commentArr.push(
        <Comment
          author={curr.author}
          date={curr.date}
          comment={curr.comment}
        />
      );
    }
  
    return (
    <div className={style.post}>
      <Author author={author} date={date}/>
      <button>Delete</button>
      <p>
        {post}
      </p>
      {commentArr}
    </div>
  )
};

export default Post;