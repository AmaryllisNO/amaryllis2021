import Guidlines from '../components/Guildines';
import Heading from '../components/Heading';
import AltAccordion from '../components/AltAccordion';
import Nav from '../components/Nav';

import CVData from '../constants/cvdata';

const About = () => {
  document.title = 'AMARYLLIS | ABOUT';
  return (
    <>
      <div className='wrapper'>
        <Guidlines />
        <div className='wrapper--inner'>
          <Heading title='About Me'></Heading>
          <p>
            Amaryllis is a pseudonym I've used since 2015, mainly as an alias
            for my music. It has ended up becoming an all-encompassing identity
            for all of my creative productions, including music, art, and as of
            recently, web development and design.
          </p>

          <p>
            As someone with many ideas I want to realise, I'm not afraid to
            learn new crafts and explore new mediums in order to make cool
            things.
          </p>

          <AltAccordion data={CVData} />
        </div>
      </div>
      <Nav />
    </>
  );
};

export default About;
