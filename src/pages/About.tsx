import Guidlines from '../components/Guildines';
import Heading from '../components/Heading';
import SmallerAccordion from '../components/SmallerAccordion';
import Nav from '../components/Nav';

import CVData from '../constants/cvdata';

const About = () => {
  return (
    <>
      <div className='wrapper'>
        <Guidlines />
        <div className='wrapper--inner'>
          <Heading title='About Me'></Heading>
          <small className='subtitle'>
            FRONTEND DEVELOPER | VISUAL DESIGNER | ARTIST | MUSICIAN
          </small>
          <SmallerAccordion data={CVData} />
        </div>
      </div>
      <Nav />
    </>
  );
};

export default About;
