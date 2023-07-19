import React, { FormEventHandler, useState } from 'react';
import style from './NewPost.module.scss';

const NewPost = ({ handleSubmit }:
  { handleSubmit: Function }) => {
    const [newPost, setNewPost] = useState('');

    return (
      <form className={style.newPost} onSubmit={(e) => handleSubmit(newPost)}>
        <textarea
          id='post'
          name='post'
          aria-label='New post'
          rows={3}
          required
          placeholder='Create new post...'
          value={newPost}
          onChange={(e) => {setNewPost(e.target.value)}}/>
        <button className='primary-btn' type='submit'>POST</button>
      </form>
    )
};

export default NewPost;