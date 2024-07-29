import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../../services/api';

import Users from '../../assets/users.png';

import H1 from '../../Components/Title';
import FormInformations from '../../Components/Form';
import Button from '../../Components/Button';

import {
  Container,
  TopBackground,
  ContainerInputs,
  Input,
  InputLabel,
} from './styles';

const Home = () => {
  const [users, setUsers] = useState([]);
  const inputName = useRef();
  const inputAge = useRef();
  const inputEmail = useRef();
  const navigate = useNavigate();

  async function registerNewUser() {
    const { data: newUser } = await api.post(
      '/users',

      {
        name: inputName.current.value,
        age: parseInt(inputAge.current.value),
        email: inputEmail.current.value,
      },
    );

    setUsers([...users, newUser]);

    navigate('/users-list');
  }

  return (
    <Container>
      <TopBackground>
        <img alt="logo" src={Users} />
      </TopBackground>

      <FormInformations>
        <H1>Register Users</H1>

        <ContainerInputs>
          <div>
            <InputLabel>Name</InputLabel>
            <Input ref={inputName} type="text" placeholder="User name" />
          </div>

          <div>
            <InputLabel>Age</InputLabel>
            <Input ref={inputAge} type="number" placeholder="User age" />
          </div>
        </ContainerInputs>

        <div style={{ width: '100%' }}>
          <InputLabel>Email</InputLabel>
          <Input
            ref={inputEmail}
            type="email"
            placeholder="Registration email"
          />
        </div>

        <Button type="button" theme="primary" onClick={registerNewUser}>
          Register User
        </Button>
      </FormInformations>

      <Button type="button" onClick={() => navigate('users-list')}>
        Users List
      </Button>
    </Container>
  );
};

export default Home;
