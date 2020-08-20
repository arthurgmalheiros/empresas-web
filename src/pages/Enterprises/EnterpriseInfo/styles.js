import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  .card {
    background: #fff;
    border-radius: 8px;
    padding: 20px;
    max-width: 800px;
    margin: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    img {
      height: 250px;
      transition: all 0.4s;
      object-fit: cover;
      margin-top: 16px;
    }

    h1 {
      margin-top: 16px;
    }

    p {
      max-width: 80%;
      text-align: justify;
      color: #444;
      margin-top: 4px;
    }

    span {
      color: #a0a0a0;
    }
  }

  @media (max-width: 620px) {
    .card {
      img {
        height: 150px;
      }
    }
  }
`;
