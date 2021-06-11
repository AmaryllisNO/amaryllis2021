import Guidlines from '../components/Guildines';
import Heading from '../components/Heading';
import Nav from '../components/Nav';

const Contact = () => {
  document.title = 'AMARYLLIS | CONTACT';
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
            <label className='form__label' htmlFor='name'>
              Name *
            </label>
            <input
              type='text'
              id='name'
              placeholder='Your name...'
              name='name'
              required
              className='form__input'
              onChange={(e) => {
                checkPopulated(e);
              }}
            ></input>

            <label className='form__label' htmlFor='email'>
              Email *
            </label>
            <input
              type='email'
              id='email'
              placeholder='Email Address...'
              name='email'
              required
              className='form__input'
              onChange={(e) => {
                checkPopulated(e);
              }}
            />

            <label className='form__label' htmlFor='subject'>
              Subject *
            </label>
            <input
              type='subject'
              id='subject'
              placeholder='Subject...'
              name='subject'
              required
              className='form__input'
              onChange={(e) => {
                checkPopulated(e);
              }}
            />

            <label className='form__label' htmlFor='message'>
              Message *
            </label>
            <textarea
              name='message'
              id='message'
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
