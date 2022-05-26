import React, { useEffect, useMemo, useState } from 'react';
import { useParams } from 'react-router-dom';
import PostService from '../API/PostService';
import PostFilter from '../components/PostFilter';
import PostList from '../components/Posts/PostList';
import { useFetching } from '../hooks/useFetching';

const Posts = () => {
  const { id } = useParams()
  const [posts, setPosts] = useState([]);

  const [fetchPosts, isPostsLoading, postsError] = useFetching(async () => {
    const posts = await PostService.getPostsByUserId(id)
    setPosts(posts.data)
  })

  useEffect(() => {
    fetchPosts(id)
  }, []);

  const [filter, setFilter] = useState({ sort: '', query: '' });

  const sortedPosts = useMemo(() => {
    if (filter.sort) {
      return [...posts].sort((a, b) => a[filter.sort].localeCompare(b[filter.sort]))
    }
    return posts
  }, [filter.sort, posts])

  const sortedAndSearchedPosts = useMemo(() => {
    return sortedPosts.filter(post => post.title.toLowerCase().includes(filter.query.toLowerCase()))
  }, [filter.query, sortedPosts])

  return (
    <div className='posts_page-wrapper'>
      {postsError && <h2>{postsError}</h2>}
      {isPostsLoading
        ? <h2>Loading...</h2>
        : <div>
          <PostFilter filter={filter} setFilter={setFilter} />
          <PostList posts={sortedAndSearchedPosts} />
        </div>
      }

    </div>
  );
};

export default Posts;