import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'
import PostService from '../API/PostService';
import CommentInputs from '../components/CommentInput/CommentInputs';
import Comments from '../components/Comments/Comments';
import { useFetching } from '../hooks/useFetching';

const PostIdPage = () => {
  const [post, setPost] = useState({});
  const { id } = useParams()
  const [commentShow, setCommentShow] = useState(false);



  const [fetchPost, isPostLoading, postError] = useFetching(async () => {
    const response = await PostService.getPostById(id)
    setPost(response.data)
  })


  useEffect(() => {
    fetchPost()
  }, []);

  function showCommentsInputs() {
    setCommentShow(true)
  }

  return (
    <div className='post_id-page-wrapper'>
      {postError && <h2>{postError}</h2>}
      {
        isPostLoading
          ? <h2>Loading...</h2>
          :
          <div>
            <div className='post-wrapper'>
              <h2>{post.title}</h2>
              <p>{post.body}</p>
            </div>
            <Comments id={id} />
            {commentShow
              ? <CommentInputs />
              : <button className='comment-button' onClick={showCommentsInputs}>Оставить комментарий</button>
            }
          </div>
      }
    </div>
  );
};

export default PostIdPage;