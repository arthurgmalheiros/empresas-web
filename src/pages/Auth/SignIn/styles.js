import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #ef5781;

  .card {
    background: #fff;
    border: 1px solid #ddd;
    padding: 26px;
    border-radius: 10px;

    display: flex;
    flex-direction: column;
    align-items: center;

    h1 {
      font-size: 1.5rem;
      font-weight: bold;
      margin-top: 46px;
      text-align: center;
    }

    p {
      text-align: center;
      color: #444;
    }

    form {
      display: flex;
      flex-direction: column;
      margin-top: 15px;
      width: 100%;

      & > div {
        margin-bottom: 18px;
      }

      span {
        color: #ababab;
        font-size: 14px;
        line-height: 16px;
        font-weight: 600;
        margin-top: 15px;
      }

      button {
        background: #ef5781;
        color: #fff;
        font-weight: bold;
        height: 46px;
        border-radius: 3px;
        margin-top: 16px;
        transition: all 0.2s;

        &:hover {
          background: rgb(239, 87, 129, 0.7);
        }
      }

      input {
        height: 40px;
        padding: 10px;
        border-radius: 3px;
        border: 1px solid rgba(0, 0, 0, 0.3);
        background-color: 1px solid rgba(0, 0, 0, 0.1);
        margin-top: 8px;
        transition: border 0.15s ease;
        font-size: 16px;

        &:focus {
          border-color: #ef5781;
        }
      }
    }
  }

  @media (max-width: 450px) {
    & {
      .card {
        border-radius: 0px;
      }
    }
  }
`;
