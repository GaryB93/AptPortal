import React, { useContext } from 'react';
import style from './Comment.module.scss';
import Author from '../Author/Author';
import GlobalContext from '../../../context/userContext';
import { Comment } from '../../../context/globalTypes';

const CommentPost = ({ author, date, comment }: Comment): JSX.Element => {
    const [state, dispatch] = useContext(GlobalContext);
  return (
    <div className={style.comment}>
      <Author author={author} date={date} />
      {state.user.name === author ? <button>Delete</button> : null}
      <p>
        {comment}
      </p>
    </div>
  )
};

export default CommentPost;