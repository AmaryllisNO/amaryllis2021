import { FC } from 'react';
import ReactDOM from 'react-dom';

interface Props {
  children: string;
  open: boolean;
  close: any;
}

const Modal: FC<Props> | any = (props: any) => {
  const { children, open, close } = props;
  const portalDiv = document.getElementById('portal');
  let popupHTML = (
    <>
      <div className='Portal--overlay' />

      <button className='Portal__button' onClick={close}>
        CLOSE
      </button>
      <div className='Portal'>{children}</div>
    </>
  );

  if (!open) {
    return null;
  }

  if (open) {
    console.log('its open');
    return portalDiv ? ReactDOM.createPortal(popupHTML, portalDiv) : null;
  }
};

export default Modal;
