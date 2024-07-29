import styled from 'styled-components';
import Background from '../../assets/background 2.svg';

export const Container = styled.div`
  background: url('${Background}');
  background-size: cover;
  height: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
`;

export const Image = styled.img`
  margin-top: 30px;
`;

export const User = styled.li`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: 20px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  background: rgba(255, 255, 255, 0.25);
  border-radius: 14px;
  width: 342px;
  height: 58px;
  border: none;
  outline: none;

  p {
    font-size: 24px;
    font-weight: normal;
    font-style: normal;
    line-height: 28px;
    color: #ffffff;
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
