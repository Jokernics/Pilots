import React, { useEffect, useState } from 'react';
import PostService from '../../API/PostService';
import { useFetching } from '../../hooks/useFetching';
import UserCard from '../UI/ProfileCard/UserCard';
import classes from './ProfileCardList.module.scss';

const UserCardList = () => {
  const [users, setUsers] = useState([]);
  const [fetchUsers, isUsersLoading, usersError] = useFetching(async () => {
    const users = await PostService.getUsers()
    setUsers(users.data)
  })

  useEffect(() => {
    fetchUsers()
  }, []);

  if (usersError) {
    return <h2>Ошибка ${usersError}</h2>
  }

  return (
    <>
      {
        isUsersLoading
          ? <h2>Loading...</h2>
          : <div className={classes.wrapper}>
            {users.map((user, index) =>
              <UserCard key={index + 1} name={user.name} city={user.address.city} userId={user.id} />
            )}
          </div>
      }
    </>
  );
};

export default UserCardList;