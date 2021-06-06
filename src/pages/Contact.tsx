import Guidlines from '../components/Guildines';
import Heading from '../components/Heading';
import Nav from '../components/Nav';

const Contact = () => {
  const checkPopulated = (
    event:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    if (event.target.value.length !== 0) {
      event.target.classList.add('form__input--populated');
    } else {
      event.target.classList.remove('form__input--populated');
    }
  };
  return (
    <>
      <div className='wrapper'>
        <Guidlines />
        <div className='wrapper--inner'>
          <Heading title='Contact' />
          <form
            action='https://formsubmit.co/amaryllisno@gmail.com'
            method='POST'
            className='form'
          >
            <input
              type='text'
              placeholder='Name *'
              name='name'
              required
              className='form__input'
              onChange={(e) => {
                checkPopulated(e);
              }}
            />

            <input
              type='email'
              placeholder='Email Address *'
              name='email'
              required
              className='form__input'
              onChange={(e) => {
                checkPopulated(e);
              }}
            />

            <input
              type='subject'
              placeholder='Subject *'
              name='subject'
              required
              className='form__input'
              onChange={(e) => {
                checkPopulated(e);
              }}
            />

            <textarea
              name='message'
              placeholder='Your message...'
              minLength={8}
              required
              className='form__input'
              onChange={(e) => {
                checkPopulated(e);
              }}
            />
            <button type='submit' className='form__button'>
              SUBMIT
            </button>
          </form>
        </div>
      </div>
      <Nav />
    </>
  );
};

export default Contact;
