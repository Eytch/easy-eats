import { React, useState } from 'react';
import StyledNavbar from './styles/Navbar.styled';
import { NavLink } from 'react-router-dom';
import { FiSearch } from 'react-icons/fi';
import { MdDarkMode, MdLightMode, MdClose } from 'react-icons/md';
import { GiHamburgerMenu } from 'react-icons/gi';

export default function Navbar(props) {
  const [isMenu, setIsMenu] = useState(false);

  function toggleIsMenu() {
    setIsMenu(!isMenu);
  }

  return (
    <StyledNavbar>
      <div className='logo'>
        <div className='menu' onClick={toggleIsMenu}>
          {isMenu ? <MdClose /> : <GiHamburgerMenu />}
        </div>

        <span className='span--black'>
          Easy<span className='span--red'>Eats</span>
        </span>
      </div>

      <div className={`nav--list ${isMenu ? 'show' : 'hide'}`}>
        <ul className='pages--list'>
          <li>
            <NavLink to='/' onClick={toggleIsMenu} className={'page--link'}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to='/meals'
              onClick={toggleIsMenu}
              className={'page--link'}
            >
              Meals
            </NavLink>
          </li>
          <li>
            <NavLink
              to='/diets'
              onClick={toggleIsMenu}
              className={'page--link'}
            >
              Diets
            </NavLink>
          </li>
          <li>
            <NavLink
              to='/cuisines'
              onClick={toggleIsMenu}
              className={'page--link'}
            >
              Cuisines
            </NavLink>
          </li>
        </ul>
      </div>

      <div className='nav--search'>
        <form>
          <FiSearch />
          <input type='text' placeholder='Search' />
        </form>

        <div className='darkmode' onClick={props.toggleIsDark}>
          {props.isDark ? <MdLightMode /> : <MdDarkMode />}
        </div>
      </div>
    </StyledNavbar>
  );
}
