import React from 'react';
import { Link } from 'react-router-dom';
import StyledFooter from './styles/Footer.styled';

function Footer() {
  return (
    <StyledFooter>
      <div className='footer--wrapper'>
        <div className='footer--main'>
          <div className='app--desc'>
            <h3 className='Logo'>EasyEats</h3>
            <p>
              A webapp to get food recipes by recipes names & ingredients that
              you have in your fridge, using react and Spoonacular-api.
            </p>
          </div>

          <div className='app--links'>
            <div className='site--map'>
              <h5>Site Map</h5>
              <ul>
                <li>
                  <Link to='/meals'>Meals</Link>
                </li>
                <li>
                  <Link to='/diets'>Diets</Link>
                </li>
                <li>
                  <Link to='/cuisines'>Cuisines</Link>
                </li>
              </ul>
            </div>
            <div className='site--map'>
              <h5>Connect</h5>
              <ul>
                <li>
                  <a href='https://github.com/Eytch'>Github</a>
                </li>
                <li>
                  <a href='https://www.linkedin.com/in/ahmad-hesham-985098149/'>
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a href='https://Instagram.com/AhmadHesham97'>Instagram</a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className='copy--rights'>
          <span>© 2022 All Rights Reserved</span>
        </div>
      </div>
    </StyledFooter>
  );
}

export default Footer;
