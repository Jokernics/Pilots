import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'
import PostService from '../API/PostService';
import PostList from '../components/Posts/PostList';
import { Link } from 'react-router-dom'
import PostPreview from '../components/Posts/PostPreview';
import { useFetching } from '../hooks/useFetching';

const UserIdPage = () => {
  const { id } = useParams()

  const [user, setUser] = useState('');
  const [posts, setPosts] = useState([]);

  const [fetchUser, isUserLoading, userError] = useFetching(async () => {
    const response = await PostService.getUserById(id)
    setUser(response.data)
  })

  const [fetchPosts, isPostsLoading, postsError] = useFetching(async () => {
    const response = await PostService.getPostsByUserId(id, 3)
    setPosts(response.data)
  })

  useEffect(() => {
    fetchUser()
    fetchPosts()
  }, []);

  return (
    <div className='profile-container'>
      {userError && <h2>{userError}</h2>}
      {isUserLoading && isPostsLoading
        ? <div> LOading...</div>
        : <div className="table">
          <div className="username-wrapper">
            <h2>{user.name}</h2>
            <button>Написать сообщение</button>
            <button>Предложить сходить на концерт</button>
          </div>
          <div className="information-wrapper">
            <h4 className="email">{user.email}</h4>
            <h4 className="phone">{user.phone}</h4>
            <h4 className="websilte">{user.website}</h4>
            <h4 className="company_name">{user.company?.name}</h4>
            <h4 className="company_bs">{user.company?.bs}</h4>
          </div>

          <div className='posts-wrapper'>
            <h2>Посты</h2>
            {postsError && <h2>{postsError}</h2>}
            <PostList
              userId={id}
              posts={posts}
            />
            <Link to='posts'><button className='look-more'>Посмотреть все</button></Link>

          </div>
          <div className="publications-wrapper">
            <h2>Публикации</h2>
          </div>
        </div>
      }
    </div>
  );
};

export default UserIdPage;