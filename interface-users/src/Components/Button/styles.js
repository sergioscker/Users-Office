import styled from 'styled-components';

export const Button = styled.button`
  padding: 16px 32px;
  width: fit-content;
  background: ${(props) =>
    props.theme === 'primary'
      ? 'linear-gradient(180deg, #fe7e5d 0%, #ff6378 100%)'
      : 'transparent'};
  border-radius: 3rem;
  border: ${(props) =>
    props.theme === 'primary' ? 'none' : '1px solid  #fff'};
  font-weight: 700;
  font-size: 18px;
  color: #fff;

  &:hover {
    opacity: 0.8;
  }

  &:active {
    opacity: 0.5;
  }

  img {
    transform: ${(props) => props.isBack && 'rotateY(180deg)'};
    margin-right: 0.5rem;
    
  }
`;
