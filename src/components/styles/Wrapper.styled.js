import styled from 'styled-components';

const Wrapper = styled.div`
  /* font-family: 'Clash Display', sans-serif; */
  /* font-family: 'Poppins', sans-serif; */

  min-height: calc(100vh - 526px);
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .recipe--cover {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    max-width: 1000px;
    gap: 10px;
    padding: 0px 40px;
    width: 100%;
    margin-top: 100px;
    .cover--name {
      width: 100%;
      font-size: clamp(1rem, 3vw, 2rem);
      font-weight: 500;
      text-transform: uppercase;
      word-spacing: 10px;
      user-select: none;
      color: ${({ theme }) => theme.text};
    }
    img {
      border-radius: 6px;
      height: auto;
      width: 50%;
      user-select: none;
    }
  }

  .recipe--info {
    width: 100vw;
    margin-top: 100px;
    display: flex;
    flex-direction: row;
    align-items: stretch;
    min-height: 400px;
    height: 100%;
    .recipe--instructions {
      flex: 70%;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: center;
      padding: 40px 90px;
      background-color: ${({ theme }) => theme.instBg};
      .recipe--name {
        text-align: center;
        color: ${({ theme }) => theme.text};
        font-weight: 500;
        user-select: none;
      }
      .title--line {
        margin-bottom: 25px;
        width: 35px;
        height: 5px;
        margin-left: -73px;
        border: none;
        background-color: ${({ theme }) => theme.orange};
      }
      .instructions--details {
        font-family: 'Poppins', sans-serif;
        font-size: 1rem;
        font-weight: 300;
        text-align: justify;
        color: ${({ theme }) => theme.text};

        ol > li {
          font-family: 'Poppins', sans-serif;
          font-size: 0.9rem;
          font-weight: 400;
          line-height: 1.7;
          text-align: justify;
          color: ${({ theme }) => theme.text};
        }
      }
    }
    .recipe--ingredients {
      flex: 30%;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: center;
      padding: 40px 90px;
      background-color: ${({ theme }) => theme.orange};
      width: 100%;
      height: auto;
      .recipe--name {
        text-align: center;
        color: white;
        font-weight: 500;
      }
      .title--line {
        margin-bottom: 25px;
        width: 35px;
        height: 5px;
        margin-left: -68px;
        border: none;
        background-color: white;
      }
      .ingredients--details {
        li {
          font-family: 'Poppins', sans-serif;
          font-size: 0.8rem;
          text-transform: uppercase;
          font-weight: 500;
          line-height: 2.5;
        }
        padding: 0px;
        margin: 0;
        align-self: flex-start;
        /* list-style: none; */
        color: white;
      }
    }
  }

  @media screen and (max-width: 1420px) {
    .recipe--info {
      .recipe--instructions {
        flex: 60%;
      }
      .recipe--ingredients {
        flex: 40%;
      }
    }
  }
  @media screen and (max-width: 1100px) {
    .recipe--info {
      .recipe--instructions {
        flex: 50%;
      }
      .recipe--ingredients {
        flex: 50%;
        .ingredients--details {
          li {
            font-size: 0.8rem;
          }
        }
      }
    }
  }
  @media screen and (max-width: 768px) {
    .recipe--cover {
      flex-direction: column-reverse;
      .cover--name {
        margin: 10px 0px 0px 0px;
        text-align: center;
      }
      img {
        width: 100%;
      }
    }
    .recipe--info {
      flex-direction: column-reverse;
      .recipe--instructions {
        padding: 40px 20px;
        .instructions--details {
          line-height: 1.5;
        }
      }
      .recipe--ingredients {
        padding: 40px 40px;
        .ingredients--details {
          font-size: 0.5rem;
        }
      }
    }
  }
`;

export default Wrapper;
