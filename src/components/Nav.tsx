import { FC, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import AmaryllisTextLogo from '../assets/icons/amaryllis-text-logo-2021.svg';

import Hamburger from '../assets/icons/menu.svg';
import Cross from '../assets/icons/cross.svg';

const Nav: FC = () => {
  const [open, setOpen] = useState(false);

  const location = useLocation();
  const pathname = location.pathname;

  return (
    <nav className={open ? 'nav nav--open' : 'nav'}>
      <div className='nav__logo'>
        <Link to='/'>
          <img src={AmaryllisTextLogo} alt='Amaryllis Logo' />
        </Link>
      </div>
      <div className='nav__hamburger'>
        <button
          className='nav__hamburgerbutton'
          onClick={() => {
            setOpen(!open);
          }}
        >
          <img
            src={!open ? Hamburger : Cross}
            alt='Hamburger Button'
            className={
              !open
                ? 'nav__hamburgerimage'
                : 'nav__hamburgerimage nav__hamburgerimage--fade'
            }
          />
        </button>
      </div>
      <ul className={open ? 'nav__list--open' : 'nav__list'}>
        <li className='nav__listitem'>
          <Link to='/'>
            {pathname === '/' ? (
              <span className='nav__link nav__link--active'>Portfolio</span>
            ) : (
              <span className='nav__link'>Portfolio</span>
            )}
          </Link>
        </li>
        <li className='nav__listitem'>
          <Link to='/about'>
            {pathname === '/about' ? (
              <span className='nav__link nav__link--active'>About</span>
            ) : (
              <span className='nav__link'>About</span>
            )}
          </Link>
        </li>
        <li className='nav__listitem'>
          <Link to='/contact'>
            {pathname === '/contact' ? (
              <span className='nav__link nav__link--active'>Contact</span>
            ) : (
              <span className='nav__link'>Contact</span>
            )}
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
