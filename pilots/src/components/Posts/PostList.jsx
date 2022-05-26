import React from 'react';
import PostPreview from './PostPreview';

const PostList = ({posts, userId, id}) => {
  if (!posts.length) {
    return (
      <h2>Посты не найдены</h2>
    )
  }
  return (
    <div className='postlist-wrapper'>
      {posts.map((post) =>
        <PostPreview userId={post.userId} id={post.id} key={post.id + Date.now().toString()} title={post.title} body={post.body} />
      )}
    </div>
  );
};

export default PostList;