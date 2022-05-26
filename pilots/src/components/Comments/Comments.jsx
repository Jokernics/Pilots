import React, { useEffect, useState } from 'react';
import PostService from '../../API/PostService';
import { useFetching } from '../../hooks/useFetching';
import './Comments.scss';

const Comments = ({ id }) => {
  const [comments, setComments] = useState([]);

  const [fetchComments, isCommentsLoading, commentsError] = useFetching(async () => {
    const response = await PostService.getCommentsById(id)
    setComments(response.data)
  })

  useEffect(() => {
    fetchComments()
  }, []);

  if (commentsError) {
    return (
      <h2>{commentsError}</h2>
    )
  }

  return (
    <div>
      {isCommentsLoading
        ? <h2>Loading...</h2>
        :
        <div className='comments-wrapper'>
        <h3>Комментарии:</h3>
          {comments.map((comment) =>
            <div key={Date.now().toString() + comment.id} className="comment-wrapper">
              <div className='user-information'>
                <h3>{comment.name}</h3>
                <h3>{comment.email}</h3>
              </div>
              <p className=''>{comment.body}</p>
            </div>
          )}
          

        </div>}
    </div>
  );
};

export default Comments;