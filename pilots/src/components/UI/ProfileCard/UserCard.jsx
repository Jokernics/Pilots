import React from 'react';
import classes from './ProfilePage.module.scss'
import { Link } from 'react-router-dom'

const UserCard = ({name, city, userId}) => {
  return (
    <div className={classes.wrapper}>
      <div>
        <h4 className={classes.username}>{name}</h4>
        <p className={classes.city}>{city}</p>
      </div>
      <Link to={`/users/${userId}`}>
        <button className={classes.clickButton}>Смотреть Профиль</button>
      </Link>
    </div>
  );
};

export default UserCard;