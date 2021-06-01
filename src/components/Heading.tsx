import { FC } from 'react';

interface Props {
  title: string;
}

const Heading: FC<Props> = (props) => {
  return <h1 className='heading heading--center'>{props.title}</h1>;
};

export default Heading;
