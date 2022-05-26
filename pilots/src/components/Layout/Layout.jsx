import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';
import './index.scss'

const Layout = () => {
  return (
    <div className='app-wrapper'>
      <Header />
      <Outlet />
    </div>
  );
};

export default Layout;