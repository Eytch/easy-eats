import styled from 'styled-components';

const Card = styled.div`
  /* font-family: 'Clash Display', sans-serif; */
  /* font-family: 'Poppins', sans-serif; */
  z-index: -99;
  display: flex;
  flex-direction: column;
  width: 220px;
  height: 220px;
  background: linear-gradient(152.21deg, #ffffff 3.61%, #ffffff 98.3%);
  box-shadow: 0px 1px 7px rgba(0, 0, 0, 0.1);
  border-radius: 30px;
  margin: 20px 5px;
  overflow: hidden;
  transition: border 0.2s ease-in-out;

  &:hover {
    cursor: pointer;
    border: 2px solid ${({ theme }) => theme.orange};
  }

  .img--container {
    flex: 70%;
    overflow: hidden;
    display: flex;
    img {
      flex-shrink: 0;
      min-width: 100%;
      height: 100%;
    }
  }

  .Card--name {
    flex: 30%;
    margin: 5px 5px;
    display: flex;
    color: black;
    justify-content: center;
    align-items: center;
    font-family: 'Poppins';
    text-transform: uppercase;
    text-align: center;
    font-weight: 500;
    font-size: 0.8rem;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  @media screen and (max-width: 768px) {
    margin: 10px 5px;
    width: 150px;
    height: 150px;
    border-radius: 15px;
    z-index: -99;
    .img--container {
      flex: 70%;
      overflow: hidden;
      display: flex;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .Card--name {
      font-size: 0.6rem;
      line-height: 1.2;
    }
  }
`;

export default Card;
