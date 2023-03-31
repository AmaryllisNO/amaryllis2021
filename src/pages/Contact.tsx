import React, { useReducer } from 'react';
import axios from 'axios';

import Guidlines from '../components/Guildines';
import Heading from '../components/Heading';
import Nav from '../components/Nav';

type FormState = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

type Action =
  | { type: 'updateName'; payload: string }
  | { type: 'updateEmail'; payload: string }
  | { type: 'updateSubject'; payload: string }
  | { type: 'updateMessage'; payload: string }
  | { type: 'reset' };

const initialState: FormState = {
  name: '',
  email: '',
  subject: '',
  message: '',
};

function reducer(state: FormState, action: Action) {
  switch (action.type) {
    case 'updateName':
      return { ...state, name: action.payload };
    case 'updateEmail':
      return { ...state, email: action.payload };
    case 'updateSubject':
      return { ...state, subject: action.payload };
    case 'updateMessage':
      return { ...state, message: action.payload };
    case 'reset':
      return initialState;
    default:
      throw new Error('Unexpected action');
  }
}

const Contact: React.FC = () => {
  document.title = 'AMARYLLIS | CONTACT';

  const [state, dispatch] = useReducer(reducer, initialState);

  const handleInputChange = (
    event:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    console.log(event.target.value, state);
    const { name, value } = event.target;
    switch (name) {
      case 'name':
        dispatch({ type: 'updateName', payload: value });
        break;
      case 'email':
        dispatch({ type: 'updateEmail', payload: value });
        break;
      case 'subject':
        dispatch({ type: 'updateSubject', payload: value });
        break;
      case 'message':
        dispatch({ type: 'updateMessage', payload: value });
        break;
      default:
        break;
    }
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    let name = state.name;
    let senderEmail = state.email;
    let subject = state.subject;
    let message = state.message;
    axios
      .post('https://emailer.fly.dev/send-email', {
        name,
        senderEmail,
        subject,
        message,
      })
      .then(() => {
        alert('Message sent!');
      })
      .catch(() => alert('Message failed to send!'));
  };

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
            // action='https://formsubmit.co/amaryllisno@gmail.com'
            method='POST'
            className='form'
            onSubmit={handleSubmit}
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
              value={state.name}
              onChange={(e) => {
                checkPopulated(e);
                handleInputChange(e);
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
              value={state.email}
              onChange={(e) => {
                checkPopulated(e);
                handleInputChange(e);
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
              value={state.subject}
              onChange={(e) => {
                checkPopulated(e);
                handleInputChange(e);
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
              value={state.message}
              onChange={(e) => {
                checkPopulated(e);
                handleInputChange(e);
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
