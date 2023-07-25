import React from 'react'
import GIT from '../../assets/skills-to_git.svg'
import NOTION from '../../assets/skills-to_notion.svg'
import JIRA from '../../assets/skills-to_jira.svg'
import DOCKER from '../../assets/skills-to_docker.svg'

const Tools = () => {
  return (
    <div className="skills__content">
        <h3 className="skills__title">Tools</h3>

        <div className="skills__box">
            <div className="skills__group">
                <div className="skills__data">
                    <img src={GIT} alt="Git" className='skills__img'/>
                    <div>
                        <h3 className="skills__name">Git</h3>
                        <span className="skills__level">Intermediate</span>
                    </div>
                </div>

                <div className="skills__data">
                    <img src={NOTION} alt="Notion" className='skills__img'/>
                    <div>
                        <h3 className="skills__name">Notion</h3>
                        <span className="skills__level">Intermediate</span>
                    </div>
                </div>

                <div className="skills__data">
                    <img src={JIRA} alt="Jira" className='skills__img'/>
                    <div>
                        <h3 className="skills__name">Jira</h3>
                        <span className="skills__level">Basic</span>
                    </div>
                </div>

                <div className="skills__data">
                    <img src={DOCKER} alt="Docker" className='skills__img'/>
                    <div>
                        <h3 className="skills__name">Docker</h3>
                        <span className="skills__level">Basic</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Tools