import { FC } from 'react';
import { Link, useLocation, useHistory } from 'react-router-dom';
import AmaryllisTextLogo from '../assets/icons/amaryllis-text-logo-2021.svg';

const Nav: FC = () => {
  return (
    <nav className='nav'>
      <div className='nav__logo'>
        <Link to='/'>
          <img src={AmaryllisTextLogo} alt='Amaryllis Logo' />
        </Link>
      </div>
    </nav>
  );
};

export default Nav;
