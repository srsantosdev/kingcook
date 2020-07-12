import styled from 'styled-components';

export const Container = styled.div`
  height: 390px;
  background: #ffffff;

  display: flex;
  justify-content: center;
  align-items: center;

  margin: 64px 0;

  cursor: pointer;

  p {
    width: 100%;
    height: 100%;
    border: 2px dashed #c52943;
    border-radius: 15px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: #343434;

    font-weight: 600;
    font-size: 20px;

    svg {
      color: #c52943;
      width: 24px;
      height: 24px;
      margin-bottom: 8px;
    }
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 15px;
  }
`;
