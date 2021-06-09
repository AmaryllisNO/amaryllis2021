import { useEffect, useState } from 'react';
import { data } from '../constants/data';

import Guidlines from '../components/Guildines';
import Heading from '../components/Heading';
import Accordion from '../components/Accordion';
import Nav from '../components/Nav';

const Home = () => {
  const [finished, setFinished] = useState(false);

  const visited = sessionStorage.getItem('visited');

  useEffect(() => {
    if (visited) {
      setFinished(true);
    }

    const timer = setTimeout(() => {
      setFinished(true);

      sessionStorage.setItem('visited', JSON.stringify(true));
    }, 2350);
    return () => clearTimeout(timer);
  }, [visited]);

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
