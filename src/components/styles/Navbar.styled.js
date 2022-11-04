import styled from 'styled-components';

const StyledNavbar = styled.nav`
  z-index: 999;
  font-family: 'Clash Display', sans-serif;
  position: fixed;
  top: 0;
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 80px;
  color: ${({ theme }) => theme.color};
  backdrop-filter: blur(20px) saturate(100%) brightness(100%);
  display: flex;
  padding: 0 90px;

  .menu {
    display: none;
    svg {
      transition: color 0.2s ease-in-out;
      color: ${({ theme }) => theme.text};
    }
  }
  .logo {
    display: flex;
    justify-content: flex-start;
    flex: 25%;
    transition: color 0.2s ease-in-out;
    color: ${({ theme }) => theme.text};
    .span--black {
      font-size: 2.5rem;
      transition: color 0.2s ease-in-out;
      color: ${({ theme }) => theme.text};
      font-weight: 600;

      .span--red {
        font-size: 2.5rem;
        transition: color 0.2s ease-in-out;
        color: ${({ theme }) => theme.orange};
        font-weight: 600;
      }
    }
  }
  .nav--list {
    flex: 50%;
    width: 100%;
  }

  .pages--list {
    width: 100%;
    font-size: 1rem;
    display: flex;
    padding: 0;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    list-style: none;
    gap: 35px;

    .page--link {
      text-decoration: none;
      transition: color 0.2s ease-in-out;
      color: ${({ theme }) => theme.text};

      &.active {
        font-weight: 500;
      }
    }
  }

  .nav--search {
    flex: 25%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 10px;
    form {
      position: relative;
      height: 42px;
      width: 100%;
      max-width: 263px;
      min-width: 120px;
      margin-left: 10px;
      input {
        transition: background-color 0.2s ease-in-out;
        transition: border 0.2s ease-in-out;
        background-color: ${({ theme }) => theme.searchBg};
        border: solid 2px ${({ theme }) => theme.searchBg};
        padding: 12px 11px;
        max-width: 263px;
        width: 100%;
        color: ${({ theme }) => theme.text};
        border-radius: 7px;
        text-indent: 35px;
        transition: border 0.2s ease-in-out;
        &:focus {
          border: solid 2px ${({ theme }) => theme.orange};
          outline: none;
        }

        &::placeholder {
          font-weight: 500;
          color: ${({ theme }) => theme.searchText};
          opacity: 1;
          padding: 50px;
        }
      }
      svg {
        color: ${({ theme }) => theme.searchText};
        position: absolute;
        top: 55%;
        left: 0%;
        transform: translate(100%, -55%);
      }
    }

    .darkmode {
      padding: 10px;
      color: ${({ theme }) => theme.text};
      border-radius: 100%;

      &:hover {
        background-color: ${({ theme }) => theme.searchBg};
      }

      svg {
        display: block;
        font-size: 1.25rem;
        cursor: pointer;
      }
    }
  }

  @media screen and (max-width: 768px) {
    padding: 0px 20px;
    .logo {
      display: flex;
      gap: 10px;
      align-items: center;
      justify-content: flex-start;

      .span--black {
        font-size: 1.7rem;

        .span--red {
          font-size: 1.7rem;
        }
      }
    }
    .menu {
      display: block;
      z-index: 999;
      align-items: center;
      svg {
        /* font-size: 1.5rem; */
        /* height: 15px; */
        line-height: 1;
        cursor: pointer;
      }
    }

    .hide {
      display: none;
    }
    .show {
      display: block;
    }
    .nav--list {
      position: fixed;
      top: 0;
      height: 100vh;
      padding: 100px 0px;
      left: 0%;
      text-align: center;
      transition: backdrop-filter 0.2s ease-in-out;
      backdrop-filter: blur(20px) saturate(100%) brightness(100%);
    }

    .pages--list {
      flex-direction: column;
    }

    .nav--search {
      justify-content: flex-end;
      z-index: -10;
      form {
        z-index: 0;
        width: 140px;
        margin-left: 10px;
        input {
          font-size: 0.8rem;
          &::placeholder {
            text-indent: -15px;
          }
        }
      }
    }
  }
`;

export default StyledNavbar;
