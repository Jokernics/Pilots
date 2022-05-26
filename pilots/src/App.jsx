import { Route, Routes, Navigate } from 'react-router-dom';

import './App.scss';
import Layout from './components/Layout/Layout';
import PostIdPage from './pages/PostIdPage';
import UserIdPage from './pages/UserIdPage';
import Posts from './pages/Posts';
import Users from './pages/Users';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Navigate replace to='/users' />} />
          <Route path='users' >
            <Route index element={<Users />} />
            <Route path=':id' element={<UserIdPage />} />
            <Route path=':id/posts' element={<Posts />} />
            <Route path=':id/posts/:id' element={<PostIdPage />} />
          </Route>
          <Route path='*' element={<Navigate replace to='/users' />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
