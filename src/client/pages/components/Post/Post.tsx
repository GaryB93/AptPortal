import React, { useContext, useState } from 'react';
import Author from '../Author/Author';
import CommentPost from '../Comment/CommentPost';
import GlobalContext from '../../../context/globalContext';
import { PostObj } from '../../../context/globalTypes';
import style from './Post.module.scss';

const Post = ({ post, commentsEnabled }: 
  { post: PostObj, commentsEnabled: boolean } ) => {
    const [showComments, setShowComments] = useState(false);
    const [commentInput, setCommentInput] = useState('');
    const [state, dispatch] = useContext(GlobalContext);

    // handle comment add
    const handleAddComment = (e: React.FormEvent) => {
      e.preventDefault();
      // add comment to appropriate post
      dispatch({
        type: 'commentAdded',
        post: post.post,
        comment: commentInput,
      });
    };

    // populate array of Comment elements
    const commentArr: JSX.Element[] = [];
    for (const curr of post.comments) {
      commentArr.push(
        <CommentPost comment={curr}/>
      );
    }

    return (
    <div className={style.post}>
      <Author author={post.author} date={post.date}/>
      {
        (state.user.isAdmin || state.user.name === post.author) ?
        <button className={style.delete} aria-label='Delete'>X</button> : null
      }
      <p className={style.postText}>
        {post.post}
      </p>
      {/* only show comment section when enabled */}
      {commentsEnabled && 
        <div>
          {showComments ? commentArr : null}
          {commentArr.length === 0 && 
            <button
              className={style.disabledComments}
              disabled={true}>
                no comments
            </button>
          }
          {commentArr.length > 0 && 
            <button
              className={style.showCommentsBtn}
              onClick={() => {setShowComments(showComments ? false : true)}}>
                {showComments ? 'hide comments...' : 'show comments...'}
            </button>
          }
          <form className={style.newComment} onSubmit={handleAddComment}>
            <textarea
              id='comment'
              name='comment'
              aria-label='New comment'
              rows={3}
              required
              placeholder='New comment...'
              value={commentInput}
              onChange={(e) => {setCommentInput(e.target.value)}}/>
            <button className='primary-btn' type='submit'>COMMENT</button>
          </form>
        </div>
      }
    </div>
  )
};

export default Post;