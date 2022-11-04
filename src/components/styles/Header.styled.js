import styled from 'styled-components';

const StyledHeader = styled.div`
  /* font-family: 'Clash Display', sans-serif; */
  /* font-family: 'Poppins', sans-serif; */
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  flex-direction: row;
  align-items: center;
  margin-top: 40px;

  .header--main {
    display: flex;
    height: 100%;
    flex: 60%;
    justify-content: center;
    width: 100%;
    justify-content: flex-start;
    flex-direction: column;
    gap: 20px;

    .header--text {
      flex: 80%;
      height: 100%;
      .header--tagline {
        width: 100%;
        font-family: 'Clash Display', sans-serif;
        font-size: clamp(1rem, 4vw, 4rem);
        color: ${({ theme }) => theme.text};
        word-spacing: 5px;

        span {
          color: ${({ theme }) => theme.orange};
        }
      }
    }

    .header--btn {
      display: flex;
      flex-direction: row;
      gap: 10px;
      align-items: center;
      height: 100%;
      flex: 20%;
      a {
        font-family: 'Poppins', sans-serif;
        font-size: clamp(0.7rem, 1vw, 1rem);
        text-decoration: none;
      }
      .btn--primary {
        padding: 10px 25px;
        color: #ffffff;
        background-color: ${({ theme }) => theme.orange};
        border-radius: 7px;
        transition: background-color 0.2s ease-in-out;

        &:hover {
          background-color: #fc4830;
        }
      }
      .btn--secondary {
        padding: 9px 25px;
        color: ${({ theme }) => theme.text};
        border: 1px solid ${({ theme }) => theme.text};
        border-radius: 7px;
        transition: background-color 0.2s ease-in-out;
        &:hover {
          background-color: ${({ theme }) => theme.text};
          color: ${({ theme }) => theme.body};
        }
      }
    }
  }

  .header--image {
    flex: 40%;
    justify-content: flex-start;
    width: 100%;
    align-items: center;
    /* margin: 0px; */
  }
  .header--image > img {
    min-width: 250px;
    width: 100%;
    height: auto;
  }

  @media screen and (max-width: 768px) {
    flex-direction: column-reverse;
    justify-content: center;
    align-items: center;
    text-align: center;
    .header--text {
      justify-content: center;
      align-items: center;
      text-align: center;
    }

    .header--btn {
      justify-content: center;
      align-items: center;
      text-align: center;
      display: flex;
      gap: 5px;
      a {
        padding: 7px 20px;
      }
    }

    .header--image > img {
      flex: 50%;
      max-width: 70%;
      /* width: 100%; */
      height: auto;
      margin: 0px;
    }
  }
`;

export default StyledHeader;
