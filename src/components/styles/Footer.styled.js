import styled from 'styled-components';

const StyledFooter = styled.div`
  /* font-family: 'Clash Display', sans-serif; */
  /* font-family: 'Poppins', sans-serif; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 100px 0px 0px 0px;
  min-height: 346px;
  height: 100%;
  width: 100%;
  background-color: ${({ theme }) => theme.Footer};
  color: ${({ theme }) => theme.FooterText};

  .footer--wrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: 1240px;
    width: 100%;
    margin: 0 auto;

    .footer--main {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: row;
      width: 100%;
      /* gap: 200px; */

      .app--desc {
        width: 60%;
        justify-self: flex-start;
        display: flex;
        flex-direction: column;
        gap: 15px;
        .Logo {
          font-size: 2.5rem;
          font-weight: 600;
        }

        p {
          font-family: 'Poppins', sans-serif;
          text-transform: uppercase;
          font-size: 0.625rem;
          max-width: 340px;
          width: 100%;
        }
      }

      .app--links {
        display: flex;
        flex-direction: row;
        gap: 40px;

        .site--map {
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
          align-items: center;

          h5 {
            font-size: 1.25rem;
            font-weight: 500;
          }

          ul {
            padding: 0;
            list-style-type: none;
            list-style: none;
            li {
              margin-top: 10px;

              a {
                text-decoration: none;
                color: ${({ theme }) => theme.FooterText};

                &:hover {
                  text-decoration: underline;
                }
              }
            }
          }
        }
      }
    }
    .copy--rights {
      margin-top: 100px;
      font-weight: 200;
      font-size: 0.75rem;
      span {
        font-family: 'Poppins', sans-serif;
      }
    }

    @media screen and (max-width: 768px) {
      .footer--main {
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 20px;
        .app--desc {
          text-align: center;
          width: 70%;

          p {
            max-width: max-content;
          }
        }
      }
      .copy--rights {
        font-weight: 200;
        font-size: 0.75rem;
        margin-top: 40px;
      }
    }
  }
`;

export default StyledFooter;
