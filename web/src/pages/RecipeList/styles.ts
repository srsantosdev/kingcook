import styled from 'styled-components';

export const Container = styled.div``;

export const Recipes = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  a {
    position: relative;
    text-decoration: none;
    width: 350px;
    height: 282px;
    background: #ffffff;
    border-radius: 15px;
    margin-bottom: 8px;

    border: 1px solid #f0f0f0;
    transition: 0.4s;

    img {
      width: 100%;
      height: 178px;
      border-radius: 15px 15px 0px 0px;
    }

    &:hover {
      border-color: #c52943;
      transform: translateY(-2px);
    }
  }

  span {
    width: 350px;
  }
`;

export const Details = styled.div`
  padding: 8px 16px;

  h2 {
    font-weight: bold;
    font-size: 22px;
    color: #c52943;
  }

  footer {
    display: flex;
    align-items: center;
    justify-content: space-between;

    margin-top: 24px;

    p {
      font-size: 14px;
      line-height: 18px;

      color: #343434;
    }
  }
`;
