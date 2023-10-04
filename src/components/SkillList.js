import React from 'react'
import '../App.css';

// const center = 'd-flex justify-content-center'

const Skills = [
  {
    id: 1,
    skill: 'html',
    img: 'https://cdn-icons-png.flaticon.com/512/919/919827.png',
  },
  {
    id: 2,
    skill: 'css',
    img: 'https://cdn-icons-png.flaticon.com/512/919/919826.png',
  },
  {
    id: 3,
    skill: 'js',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Javascript-shield.svg/1200px-Javascript-shield.svg.png',
  },
  {
    id: 4,
    skill: 'react',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png',
  },
  {
    id: 5,
    skill: 'ruby',
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
    img: 'https://www.clipartmax.com/png/middle/243-2432711_azure-sql-database-icon.png'
  },
  {
    id: 8,
    skill: 'Figma',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Figma-logo.svg/1667px-Figma-logo.svg.png'
  },
  {
    id: 9,
    skill: 'Github',
    img: 'https://w7.pngwing.com/pngs/914/758/png-transparent-github-social-media-computer-icons-logo-android-github-logo-computer-wallpaper-banner-thumbnail.png'
  },
];

export const SkillList = () => {
  return (
    <div className="skills">
      {Skills.map((skill) => (
          <img key={skill.id} src={skill.img} alt={skill.skill} className="skill-image"></img>
      ))}
    </div>
  );
};

export default SkillList;
