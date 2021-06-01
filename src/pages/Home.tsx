import Guidlines from '../components/Guildines';
import Heading from '../components/Heading';
import Accordion from '../components/Accordion';

const Home = () => {
  return (
    <>
      <div className='wrapper'>
        <Guidlines></Guidlines>
        <Heading title='Amaryllis'></Heading>
        <small className='subtitle'>
          FRONTEND DEVELOPER | VISUAL DESIGNER | ARTIST | MUSICIAN
        </small>
        <Accordion />
      </div>
    </>
  );
};

export default Home;
