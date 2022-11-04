import React from 'react';
import StyledHeader from './styles/Header.styled';
import Container from './styles/Container.styled';
import HeaderImage from '../assets/images/HeaderImg.svg';

function Header() {
  return (
    <Container>
      <StyledHeader>
        <div className='header--main'>
          <div className='header--text'>
            <h3 className='header--tagline'>
              Food that will make <br /> you feel at <span>home.</span>
            </h3>
          </div>
          <div className='header--btn'>
            <a href='#' className='btn--primary'>
              Explore Recipes
            </a>
            <a href='http://github.com/Eytch' className='btn--secondary'>
              GitHub
            </a>
          </div>
        </div>
        <div className='header--image'>
          <img
            src={HeaderImage}
            className='Headerimage'
            alt='Recipes Illustration'
          />
        </div>
      </StyledHeader>
    </Container>
  );
}

export default Header;
