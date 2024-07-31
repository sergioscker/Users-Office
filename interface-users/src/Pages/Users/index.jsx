import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../../services/api';

import Logo from '../../assets/users.svg';
import Arrow from '../../assets/arrow.svg';
import Trash from '../../assets/trash.svg';

import H1 from '../../Components/Title';
import FormInformations from '../../Components/Form';
import Button from '../../Components/Button';

import { Container, Image, User } from './styles';

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

      <FormInformations isBlur={true}>
        <H1>Users List</H1>

        <ul>
          {users.map((user) => (
            <User key={user.id}>
              <p>{user.name}</p>
              <p>{user.age}</p>
              <button onClick={() => deleteUser(user.id)}>
                <img alt="delete-user" src={Trash} />
              </button>
            </User>
          ))}
        </ul>

        <Button isBack={true} onClick={() => navigate('/')}>
          <img alt="arrow" src={Arrow} />
          Back Home
        </Button>
      </FormInformations>
    </Container>
  );
};

export default Users;
