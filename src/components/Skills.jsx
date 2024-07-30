import React from 'react'

import html from '../assets/skills/html.png'
import css from '../assets/skills/css.png'
import js from '../assets/skills/javascript.png'
import react from '../assets/skills/react.png'
import node from '../assets/skills/nodejs.png'
import mongodb from '../assets/skills/mongodb.png'
import tailwinf from '../assets/skills/tailwind.png'
import express from '../assets/skills/expressjs.png'
import github from '../assets/skills/github.png'
import powerbi from '../assets/skills/powerbi.png'
import automate from '../assets/skills/powerautomate.png'
import dialogflow from '../assets/skills/dialogflow.png'

const Skills = () => {
  const skillsData = [
    { name: 'HTML', image: html },
    { name: 'CSS', image: css },
    { name: 'JavaScript', image: js },
    { name: 'React', image: react },
    { name: 'Node.js', image: node },
    { name: 'MongoDB', image: mongodb },
    { name: 'Tailwind CSS', image: tailwinf },
    { name: 'Express.js', image: express },
    { name: 'GitHub', image: github },
    { name: 'Power BI', image: powerbi },
    { name: 'Power Automate', image: automate },
    { name: 'Dialogflow', image: dialogflow },
  ]

  return (
    <div id='skills' className="container mx-auto mt-4">
      <div className="flex flex-col md:flex-row gap-4 p-4">
        <div className="w-full p-4">
          <h1 className="text-2xl mb-8 font-semibold">Skills</h1>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {skillsData.map((skill, index) => (
              <div key={index} className="flex flex-col items-center bg-base-200 rounded-lg p-4 shadow-md">
                <img src={skill.image} alt={skill.name} className="w-16 h-16 mb-2" />
                <p className="text-center font-medium">{skill.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skills
