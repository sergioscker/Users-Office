import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  background-color: #181f36;
  min-height: 100%;
  padding: 20px;
`;

export const TopBackground = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  background: linear-gradient(180deg, #fe7e5d 0%, #ff6378 100%);
  border-radius: 2rem;
  height: 30vh;
  width: 90vw;
  max-width: 800px;

  img {
    max-width: 100%;
    max-height: 100%;
    border-radius: 2rem;
  }
`;

export const ContainerInputs = styled.div`
  display: flex;
  gap: 20px;
`;

export const Input = styled.input`
  background-color: #fff;
  border-radius: 1rem;
  border: 1px solid #d2dae2;
  padding: 12px 20px;
  font-size: 20px;
  width: 100%;
`;

export const InputLabel = styled.label`
  font-size: 1.5rem;
  font-weight: 500;
  color: #fff;
`;
