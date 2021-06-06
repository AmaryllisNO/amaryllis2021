import {
  FaTwitter,
  FaInstagram,
  FaPatreon,
  FaTwitch,
  FaSpotify,
  FaSoundcloud,
} from 'react-icons/fa';

const Socials = (props: any) => {
  const { open } = props;
  console.log(open);
  return (
    <ul
      className={
        !open
          ? 'socials socials__list'
          : 'socials socials__list socials__list--open'
      }
    >
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
