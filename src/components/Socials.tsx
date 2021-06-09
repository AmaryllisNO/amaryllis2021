import {
  FaTwitter,
  FaInstagram,
  FaPatreon,
  FaTwitch,
  FaSpotify,
  FaSoundcloud,
} from 'react-icons/fa';
import { useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';

const Socials = (props: any) => {
  const location = useLocation();
  const [listClass, setListClass] = useState('socials socials__list');

  const { open } = props;
  const visited = sessionStorage.getItem('visited');

  useEffect(() => {
    if (open) {
      setListClass('socials socials__list socials__list--open');
    } else if (location.pathname === '/' && !visited) {
      setListClass('socials socials--fade socials__list');
      console.log('were on the homepage');
    } else if (location.pathname !== '/') {
      setListClass('socials socials__list');
    } else if (!open) {
      setListClass('socials socials__list');
    } else if (!open && location.pathname === '/') {
      setListClass('socials socials--fade socials__list');
    }
  }, [open, location.pathname, visited]);

  return (
    <ul className={listClass}>
      <li className='socials__listitem'>
        <a
          href='https://twitter.com/amaryllis_no'
          target='_blank'
          rel='noopener noreferrer'
          className='socials__link'
        >
          <FaTwitter />
        </a>
      </li>
      <li className='socials__listitem'>
        <a
          href='https://open.spotify.com/artist/5suuQjUs3ukUoEKCPiwWAX?si=50XpAWi0RLigjqstzBWonw'
          target='_blank'
          rel='noopener noreferrer'
          className='socials__link'
        >
          <FaSpotify />
        </a>
      </li>
      <li className='socials__listitem'>
        <a
          href='https://www.patreon.com/amaryllisno'
          target='_blank'
          rel='noopener noreferrer'
          className='socials__link'
        >
          <FaPatreon />
        </a>
      </li>
      <li className='socials__listitem'>
        <a
          href='https://www.instagram.com/amaryllis_no/'
          target='_blank'
          rel='noopener noreferrer'
          className='socials__link'
        >
          <FaInstagram />
        </a>
      </li>
      <li className='socials__listitem'>
        <a
          href='https://soundcloud.com/amaryllis_no'
          target='_blank'
          rel='noopener noreferrer'
          className='socials__link'
        >
          <FaSoundcloud />
        </a>
      </li>
      <li className='socials__listitem'>
        <a
          href='https://www.twitch.tv/amaryllis_no'
          target='_blank'
          rel='noopener noreferrer'
          className='socials__link'
        >
          <FaTwitch />
        </a>
      </li>
    </ul>
  );
};

export default Socials;
