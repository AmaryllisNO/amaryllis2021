import { FC, useState } from 'react';
// import { data } from '../constants/data';

interface Props {
  data: object[];
}

const Accordion: FC<Props> = (props) => {
  const workData = props.data;
  console.log(workData);
  const [selected, setSelected] = useState(null);

  const toggle = (i: any) => {
    if (selected === i) {
      return setSelected(null);
    }

    setSelected(i);
  };

  return (
    <div className={selected !== null ? 'accordion--selected' : 'accordion'}>
      {workData?.map((item: any, i: number) => (
        <div
          key={item.id}
          className={
            selected === i
              ? 'accordion__segment--selected'
              : 'accordion__segment'
          }
          onClick={() => toggle(i)}
        >
          <h2 className='accordion__heading'>{item.title}</h2>
          <div
            className={
              selected === i
                ? 'accordion__content--selected'
                : 'accordion__content'
            }
          >
            <p className='accordion__description'>{item.description}</p>
            {item.works?.map(
              (work: {
                id: number;
                image: string;
                link: string;
                title: string;
              }) => (
                <a key={work.id} href={work.link} className='accordion__work'>
                  <div className='accordion__worklabel'>
                    <h4 className='accordion__worktitle'>{work.title}</h4>
                  </div>

                  <div className='accordion__link'>
                    <img
                      className='accordion__workimage'
                      src={work.image}
                      alt={work.title}
                    />
                  </div>
                </a>
              )
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Accordion;
