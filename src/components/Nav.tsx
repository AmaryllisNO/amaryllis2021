import { FC, useState } from 'react';
import { Link, useLocation, useHistory } from 'react-router-dom';
import AmaryllisTextLogo from '../assets/icons/amaryllis-text-logo-2021.svg';

import Hamburger from '../assets/icons/menu.svg';
import Cross from '../assets/icons/cross.svg';

const Nav: FC = () => {
  const [open, setOpen] = useState(false);
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
    </nav>
  );
};

export default Nav;
