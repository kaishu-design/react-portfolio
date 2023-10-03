import React from 'react'
import '../App.css';

const Skills = [
  {
    id: 1,
    skill: 'html',
    img: 'https://cdn-icons-png.flaticon.com/512/919/919827.png'
  },
  {
    id: 2,
    skill: 'css',
    img: 'https://cdn-icons-png.flaticon.com/512/919/919826.png'
  },
  {
    id: 3,
    skill: 'js',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Javascript-shield.svg/1200px-Javascript-shield.svg.png'
  },
  // {
  //   id: 4,
  //   skill: 'react'
  // },
  // {
  //   id: 5,
  //   skill: 'ruby'
  // },
  // {
  //   id: 6,
  //   skill: 'SQL'
  // },
  // {
  //   id: 5,
  //   skill: 'Figma'
  // },
  // {
  //   id: 5,
  //   skill: 'Github'
  // },
];

export const SkillList = () => {
  return (
    <div>
    {Skills.map((skill) => (
      <div key={skill.id} className="skills">
        <img src={skill.img} alt={skill.skill} className="skill-image"></img>
      </div>
    ))}
  </div>
  );
};

export default SkillList;
