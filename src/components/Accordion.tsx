import { FC, useState } from 'react';
// import { data } from '../constants/data';

interface Props {
  data: object[];
}

const Accordion: FC<Props> = (props) => {
  const { data } = props;
  const workData = data;
  const [selected, setSelected] = useState(null);

  const toggle = (i: any) => {
    if (selected === i) {
      return setSelected(null);
    }

    return setSelected(i);
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
        >
          <h2
            tabIndex='1'
            className='accordion__heading'
            onClick={() => toggle(i)}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                toggle(i);
              }
            }}
          >
            {item.title}
          </h2>
          <div
            className={
              selected === i
                ? 'accordion__content--selected'
                : 'accordion__content'
            }
          >
            <p className='accordion__description'>{item.description}</p>
            <div className='accordion__works'>
              {item.works?.map(
                (work: {
                  id: number;
                  image: string;
                  link: string;
                  title: string;
                }) => (
                  <>
                    <a
                      key={work.id}
                      href={work.link}
                      className='accordion__work'
                    >
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
                  </>
                )
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Accordion;
