import React from 'react';
import classes from './header.module.scss'
import './index.scss'
import { Link } from 'react-router-dom'

const Header = () => {

  return (
    <>
      <header>
        <div className='header-container'>
          <Link to='/'><h1>Concert club</h1></Link>
          <div className="header-buttons">
            <button className={`button ${classes.button1}`}>Версия для слабовидящих</button>
            <button className={`button ${classes.button2}`}>Мой профиль</button>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;