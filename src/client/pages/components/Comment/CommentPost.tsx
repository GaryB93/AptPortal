import React, { useContext } from 'react';
import style from './CommentPost.module.scss';
import Author from '../Author/Author';
import GlobalContext from '../../../context/globalContext';
import { Comment } from '../../../context/globalTypes';

const CommentPost = ({ comment }: { comment: Comment }): JSX.Element => {
  const [state, dispatch] = useContext(GlobalContext);

  return (
    <div className={style.comment}>
      <Author author={comment.author} date={comment.date} />
      {state.user.name === comment.author || state.user.isAdmin ? <button>Delete</button> : null}
      <p>
        {comment.comment}
      </p>
    </div>
  )
};

export default CommentPost;