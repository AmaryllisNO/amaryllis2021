import { FC, useState } from 'react';

interface Props {
  title?: string;
  description?: string;
  works?: object;
}

const Accordion: FC<Props> = (props) => {
  const [selected, setSelected] = useState(null);

  const data = [
    {
      id: 0,
      title: 'Websites',
      description:
        'A collection of websites I’ve built as a frontend developer.',
      works: [
        {
          id: 0.0,
          title: 'Art Commissions | 2021',
          image:
            'https://cdn.discordapp.com/attachments/798636076662390805/849380626485870612/unknown.png',
          link: 'https://commissions.amaryllis.cc',
        },
        {
          id: 0.1,
          title: 'Grafix | 2021',
          image:
            'https://cdn.discordapp.com/attachments/798636076662390805/849381320466759690/unknown.png',
          link: 'https://grafix-website.vercel.app/',
        },
      ],
    },
    {
      id: 1,
      title: 'Graphics',
      description:
        'A collection of websites I’ve built as a frontend developer.',
    },
    {
      id: 2,
      title: 'Art',
      description:
        'A collection of websites I’ve built as a frontend developer.',
    },
    {
      id: 3,
      title: 'Music',
      description:
        'A collection of websites I’ve built as a frontend developer.',
    },
  ];

  const toggle = (i: any) => {
    if (selected === i) {
      return setSelected(null);
    }
    console.log(selected);

    setSelected(i);
  };

  return (
    <div className='accordion'>
      {data.map((item, i) => (
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
            {item.works?.map((work) => (
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
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Accordion;
