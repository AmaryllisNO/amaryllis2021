import React, { useState } from 'react';

interface Props {
  data: object[];
  [index: number]: {
    id: number;
    title: string;
    experience: string | number;
    description: string;
    skill_name: string;
    skills: string[];
    tools: string[];
  };
}

const AltAccordion: React.FunctionComponent<Props> = (props: Props) => {
  console.log(props);
  const cvData = props.data;
  const [selected, setSelected] = useState(null);

  console.log(cvData[0]);

  const toggle = (i: any) => {
    if (selected === i) {
      return setSelected(null);
    }

    return setSelected(i);
  };

  return (
    <div className={selected !== null ? 'accordion--selected' : 'accordion'}>
      <h2 className='heading--smaller'>CURRICULUM VITAE</h2>
      {cvData.map((item: object[] | any, i: number) => (
        <div
          key={item.id}
          className={
            selected === i
              ? 'accordion__segment--selected'
              : 'accordion__segment'
          }
        >
          <h2
            className='accordion__heading accordion__heading--alt'
            onClick={() => toggle(i)}
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
            <ul className='accordion__experiencelist'>
              <li className='accordion__experiencelistitem'>
                {item.experience[0].degree}
              </li>

              <li className='accordion__experiencelistitem'>
                {item.experience[1]}
              </li>
            </ul>
            <p className='accordion__description'>{item.description}</p>
            <ul>
              <li>
                {item.skill_name}
                {item.skills.map((skill: string) => skill)}
              </li>
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AltAccordion;
