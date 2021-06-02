import Guidlines from '../components/Guildines';
import Heading from '../components/Heading';
import Accordion from '../components/Accordion';
import Nav from '../components/Nav';

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
          <Accordion />
        </div>
      </div>
      <Nav />
    </>
  );
};

export default About;
