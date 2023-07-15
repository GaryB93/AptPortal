import React, { useState } from 'react';
import style from './NewPost.module.scss';

const NewPost = ({ page }:
  { page: 'news' | 'community' }) => {
    const [newPost, setNewPost] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      // if on 'news' page add to news
      // if on 'community' page add community post
    }

    return (
      <form className={style.newPost} onSubmit={handleSubmit}>
        <label htmlFor='post'>New Post</label>
        <textarea
          id='post'
          name='post'
          rows={3}
          required
          placeholder='Create new post...'
          value={newPost}
          onChange={(e) => {setNewPost(e.target.value)}}>
        </textarea>
        <button type='submit'>POST</button>
      </form>
    )
};

export default NewPost;