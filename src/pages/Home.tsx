import { useEffect, useState } from 'react';
import { data } from '../constants/data';

import Guidlines from '../components/Guildines';
import Heading from '../components/Heading';
import Accordion from '../components/Accordion';
import Nav from '../components/Nav';

const Home = () => {
  const [finished, setFinished] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFinished(true);
    }, 2800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <div className={finished ? 'intro--finished' : 'intro'}></div>
      <div className='wrapper'>
        <Guidlines />
        <div className='wrapper--inner'>
          <Heading title='Amaryllis'></Heading>
          <small className='subtitle'>
            FRONTEND DEVELOPER | VISUAL DESIGNER | ARTIST | MUSICIAN
          </small>
          <Accordion data={data} />
        </div>
      </div>
      <Nav />
    </>
  );
};

export default Home;
