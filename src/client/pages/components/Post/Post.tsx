import React, { useContext} from 'react';
import Author from '../Author/Author';
import CommentPost from '../Comment/Comment';
import GlobalContext from '../../../context/userContext';
import { Comment } from '../../../context/globalTypes';
import style from './Post.module.scss';

const Post = ({ author, date, post, comments }: 
  { author: string, date: string, post: string, comments: Comment[]}) => {
    const [state, dispatch] = useContext(GlobalContext);
    const commentArr:JSX.Element[] = [];

    for (const curr of comments) {
      commentArr.push(
        <CommentPost
          author={curr.author}
          date={curr.date}
          comment={curr.comment}
        />
      );
    }
  
    return (
    <div className={style.post}>
      <Author author={author} date={date}/>
      {(state.user.isAdmin || state.user.name === author) ? <button>Delete</button> : null}
      <p>
        {post}
      </p>
      {commentArr}
    </div>
  )
};

export default Post;