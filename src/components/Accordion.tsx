import { FC } from 'react';

interface Props {
  title?: string;
  description?: string;
  works?: object;
}

const Accordion: FC<Props> = (props) => {
  const data = [
    {
      title: 'Websites',
      description:
        'A collection of websites I’ve built as a frontend developer.',
      works: [
        {
          title: 'Art Commissions | 2021',
          image:
            'https://cdn.discordapp.com/attachments/798636076662390805/849380626485870612/unknown.png',
          link: 'https://commissions.amaryllis.cc',
        },
        {
          title: 'Grafix | 2021',
          image:
            'https://cdn.discordapp.com/attachments/798636076662390805/849381320466759690/unknown.png',
          link: 'https://grafix-website.vercel.app/',
        },
      ],
    },
    {
      title: 'Graphics',
      description:
        'A collection of websites I’ve built as a frontend developer.',
    },
    {
      title: 'Art',
      description:
        'A collection of websites I’ve built as a frontend developer.',
    },
    {
      title: 'Music',
      description:
        'A collection of websites I’ve built as a frontend developer.',
    },
  ];

  return (
    <div className='accordion'>
      {data.map((item) => (
        <div className='accordion__segment'>
          <h2 className='accordion__heading'>{item.title}</h2>
          <div className='accordion__content'>
            <p className='accordion__description'>{item.description}</p>
            {item.works?.map((work) => (
              <a href={work.link} className='accordion__work'>
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
