import styled from 'styled-components';
import Background from '../../assets/background 2.svg';

export const Container = styled.div`
  background: url('${Background}');
  background-size: cover;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  padding: 20px;
`;

export const Image = styled.img`
  margin-top: 1.875rem;
`;

export const UsersContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  margin: 40px 0;

  @media (max-width: 750px) {
    grid-template-columns: 1fr;
  }
`;

export const CardUsers = styled.div`
  background-color: #252d48;
  padding: 16px;
  border-radius: 32px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
  max-width: 380px;

  h3 {
    color: #fff;
    font-size: 24px;
    margin-bottom: 3px;
    text-transform: capitalize; // transforma o texto com a primeira letra maiúscula
  }
  p {
    color: #fff;
    font-size: 14px;
    font-weight: 200;
  }
`;

export const AvatarUser = styled.img`
  height: 80px;
`;

export const TrashIcon = styled.img`
  cursor: pointer;
  padding-left: 30px;

  &:hover {
    opacity: 0.8;
  }

  &:active {
    opacity: 0.5;
  }
`;
