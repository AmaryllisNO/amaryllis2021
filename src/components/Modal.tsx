interface Props {
  children: any;
  open: boolean;
  image?: string;
}

const Modal: React.FunctionComponent<Props> = ({ open, children }) => {
  console.log("modal opened", open);
  if (!open) return null;

  return (
    <>
      <div className="Portal--overlay" />
      <div className="Portal"></div>
      {children}
    </>
  );
};

export default Modal;
