import styled from 'styled-components';

const GridContainerMain = styled.div`
  /* font-family: 'Clash Display', sans-serif; */
  /* font-family: 'Poppins', sans-serif; */

  padding: 0 20px;

  .Grid--title {
    font-weight: 600;
    word-spacing: 5px;
    font-size: 1.5rem;
    margin-top: 60px;
    color: ${({ theme }) => theme.text};
  }
  .cards--links {
    text-decoration: none;
    color: ${({ theme }) => theme.text};
  }

  .main--grid {
    display: flex;
    justify-content: center;
    gap: 10px;
    flex-wrap: wrap;
  }
  .title--line {
    margin-bottom: 25px;
    width: 55px;
    height: 5px;
    border: none;
    background-color: ${({ theme }) => theme.orange};
  }

  @media screen and (max-width: 768px) {
    padding: 0;
  }
`;

export default GridContainerMain;
