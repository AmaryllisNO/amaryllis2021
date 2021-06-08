import { FC, useState } from 'react';

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
          tabIndex={item.id}
          className={
            selected === i
              ? 'accordion__segment--selected'
              : 'accordion__segment'
          }
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              toggle(i);
            }
          }}
        >
          <h2 className='accordion__heading' onClick={() => toggle(i)}>
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
              {item.title === 'Websites' ? (
                <>
                  {item.works?.map(
                    (work: {
                      id: number;
                      image: string;
                      link: string;
                      title: string;
                    }) => (
                      <a
                        key={work.id}
                        href={work.link}
                        className='accordion__work'
                        target='_blank'
                        rel='noopener noreferrer'
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
                    )
                  )}
                </>
              ) : (
                ''
              )}

              {item.title === 'Graphics' ? (
                <>
                  {item.works?.map(
                    (work: { id: number; image: string; title: string }) => (
                      <div key={work.id} className='accordion__work'>
                        <div className='accordion__worklabel'>
                          <h4 className='accordion__worktitle'>{work.title}</h4>
                        </div>

                        <div className='accordion__link'>
                          <img
                            className='accordion__workimage accordion__workimage--uncrop accordion__workimage--spaced'
                            src={work.image}
                            alt={work.title}
                          />
                        </div>
                      </div>
                    )
                  )}
                </>
              ) : (
                ''
              )}

              {item.title === 'Art' ? (
                <>
                  {item.works?.map(
                    (work: {
                      id: number;
                      image: string;
                      link: string;
                      title: string;
                      thumbnail: string;
                    }) => (
                      <div key={work.id} className='accordion__work'>
                        <div className='accordion__worklabel'>
                          <h4 className='accordion__worktitle'>{work.title}</h4>
                        </div>

                        <div className='accordion__link'>
                          <img
                            className='accordion__workimage accordion__workimage--center'
                            src={work.thumbnail}
                            alt={work.title}
                          />
                        </div>
                      </div>
                    )
                  )}
                </>
              ) : (
                ''
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Accordion;
