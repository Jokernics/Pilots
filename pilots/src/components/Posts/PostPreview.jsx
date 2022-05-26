import React from 'react';
import './index.scss'
import { Link } from 'react-router-dom'

const PostPreview = ({id, userId, title, body}) => {
  body = body.slice(0, 24) + '...'
  return (
    <div className='post'>
      <div className='post__content'>
        <h2>{title}</h2>
        <p>{body}</p>
      </div>
      <Link to={`/users/${userId}/posts/${id}`}><button className='post__btns'>Подробнее</button></Link>
    </div>

  );
};

export default PostPreview;