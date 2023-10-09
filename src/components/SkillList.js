import React from 'react'
import '../App.css';

const center = 'd-flex justify-content-start'

const Skills = [
  {
    id: 1,
    skill: 'HTML',
    img: 'https://cdn-icons-png.flaticon.com/512/919/919827.png',
  },
  {
    id: 2,
    skill: 'CSS',
    img: 'https://cdn-icons-png.flaticon.com/512/919/919826.png',
  },
  {
    id: 3,
    skill: 'JavaScript',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Javascript-shield.svg/1200px-Javascript-shield.svg.png',
  },
  {
    id: 4,
    skill: 'React',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png',
  },
  {
    id: 5,
    skill: 'Ruby',
    img: 'https://raw.githubusercontent.com/docker-library/docs/01c12653951b2fe592c1f93a13b4e289ada0e3a1/ruby/logo.png'
  },
  {
    id: 6,
    skill: 'Rails',
    img: 'https://www.svgrepo.com/show/354252/rails.svg'
  },
  {
    id: 7,
    skill: 'SQL',
    img: 'https://cdn-icons-png.flaticon.com/128/1265/1265531.png'
  },
  {
    id: 8,
    skill: 'Figma',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Figma-logo.svg/1667px-Figma-logo.svg.png'
  },
  {
    id: 9,
    skill: 'SCSS',
    img: 'https://sass-lang.com/assets/img/styleguide/seal-color.png'
  },
  {
    id: 10,
    skill: 'Bootstraps',
    img: 'https://camo.githubusercontent.com/2512b49c89512f2ff3718f7257f48ed5c46a4e331abbd890b6c5e8c0e458434f/68747470733a2f2f676574626f6f7473747261702e636f6d2f646f63732f352e322f6173736574732f6272616e642f626f6f7473747261702d6c6f676f2d736861646f772e706e67'
  },
  {
    id: 11,
    skill: 'GitHub',
    img: 'https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png'
  },
  {
    id: 12,
    skill: 'Slack',
    img: 'https://cdn-icons-png.flaticon.com/128/2111/2111615.png'
  },
];

export const SkillList = () => {
  const firstColumnSkills = Skills.slice(0, 6);
  const secondColumnSkills = Skills.slice(6, 12);

  return (
    <div className="row mt-5 skills">
      <div className={`${center} col-12`}>
        {firstColumnSkills.map((skill) => (
          <div key={skill.id} className="skill-item">
            <img src={skill.img} alt={skill.skill} className="skill-image" />
            <p className="text-center skill-p">{skill.skill}</p>
          </div>
        ))}
      </div>
      <div className={`${center} col-12`}>
        {secondColumnSkills.map((skill) => (
          <div key={skill.id} className="skill-item">
            <img src={skill.img} alt={skill.skill} className="item-center skill-image" />
            <p className="text-center skill-p">{skill.skill}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
export default SkillList;
