import styled from 'styled-components';
import Background from '../../assets/background 2.svg';

export const Container = styled.div`
  background: url('${Background}');
  background-size: cover;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2.5rem;
`;

export const Image = styled.img`
  margin-top: 1.875rem;
`;

export const User = styled.li`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: 1.25rem;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  background: rgba(255, 255, 255, 0.25);
  border-radius: 0.875rem;
  width: 21.37rem;
  height: 3.625rem;
  border: none;
  

  p {
    font-size: 1.5rem;
    font-weight: normal;
    font-style: normal;
    line-height: 1.75rem;
    color: #fff;
  }

  button {
    background: none;
    border: none;
    cursor: pointer;

    &:hover {
      opacity: 0.8;
    }

    &:active {
      opacity: 0.5;
    }
  }
`;
