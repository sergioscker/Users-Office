import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../../services/api';

import Logo from '../../assets/users.svg';
import Arrow from '../../assets/arrow.svg';
import Trash from '../../assets/trash.svg';

import H1 from '../../Components/Title';
import Button from '../../Components/Button';

import {
  Container,
  Image,
  UsersContent,
  CardUsers,
  TrashIcon,
  AvatarUser,
} from './styles';

const Users = () => {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchUsers() {
      const { data: newUsers } = await api.get('/users');

      setUsers(newUsers);
    }

    fetchUsers();
  }, []);

  async function deleteUser(userId) {
    await api.delete(`/users/${userId}`);

    const newUsers = users.filter((user) => user.id !== userId);

    setUsers(newUsers);
  }

  return (
    <Container>
      <Image alt="log-image" src={Logo} />

      <H1>Users List</H1>

      <UsersContent>
        {users.map((user) => (
          <CardUsers key={user.id}>
            <AvatarUser
              src={`https://avatar.iran.liara.run/public?username=${user.id}`}
            />
            <div>
              <h3>{user.name}</h3>
              <p>{user.age}</p>
              <p>{user.email}</p>
            </div>

            <TrashIcon
              src={Trash}
              alt="trash-icon"
              onClick={() => deleteUser(user.id)}
            />
          </CardUsers>
        ))}
      </UsersContent>

      <Button isBack={true} onClick={() => navigate('/')}>
        <img alt="arrow" src={Arrow} />
        Back Home
      </Button>
    </Container>
  );
};

export default Users;
