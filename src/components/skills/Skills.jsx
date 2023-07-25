import React from 'react'
import './skills.css'
import Frontend from './Frontend'
import Backend from './Backend'
import Design from './Design'
import Tools from './Tools'

const Skills = () => {
  return (
    <section className="skill section" id="skills">
        <h2 className="section__title">Skills</h2>
        <span className="section__subtitle">My technical skills</span>

        <div className="skills__container container grid">
            <Frontend />
            <Backend />
            <Design />
            <Tools />
        </div>
    </section>
  )
}

export default Skills