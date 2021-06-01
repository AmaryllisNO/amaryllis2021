import Guidlines from '../components/Guildines';
import Heading from '../components/Heading';

const Home = () => {
  return (
    <>
      <div className='wrapper'>
        <Guidlines></Guidlines>
        <Heading title='Amaryllis'></Heading>
        <small className='subtitle'>
          FRONTEND DEVELOPER | VISUAL DESIGNER | ARTIST | MUSICIAN
        </small>
      </div>
    </>
  );
};

export default Home;
