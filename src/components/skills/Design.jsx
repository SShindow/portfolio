import React from 'react'
import PHOTOSHOP from '../../assets/skills-de_pts.svg'
import FIGMA from '../../assets/skills-de_figma.svg'
import XD from '../../assets/skills-de_xd.svg'
import PREMIERE from '../../assets/skills-de_pr.svg'
import LIGHTROOM from '../../assets/skills-de_lr.svg'

const Design = () => {
  return (
    <div className="skills__content">
        <h3 className="skills__title">Design</h3>

        <div className="skills__box">
            <div className="skills__group">
            <div className="skills__data">
                    <img src={FIGMA} alt="Figma" className='skills__img'/>
                    <div>
                        <h3 className="skills__name">Figma</h3>
                        <span className="skills__level">Intermediate</span>
                    </div>
                </div>

                <div className="skills__data">
                    <img src={PHOTOSHOP} alt="Adobe Photoshop" className='skills__img'/>
                    <div>
                        <h3 className="skills__name">Photoshop</h3>
                        <span className="skills__level">Basic</span>
                    </div>
                </div>

                <div className="skills__data">
                    <img src={XD} alt="Adobe XD" className='skills__img'/>
                    <div>
                        <h3 className="skills__name">XD</h3>
                        <span className="skills__level">Basic</span>
                    </div>
                </div>

                <div className="skills__data">
                    <img src={PREMIERE} alt="Adobe Premiere" className='skills__img'/>
                    <div>
                        <h3 className="skills__name">Premiere</h3>
                        <span className="skills__level">Basic</span>
                    </div>
                </div>

                <div className="skills__data">
                    <img src={LIGHTROOM} alt="Adobe Lightroom" className='skills__img'/>
                    <div>
                        <h3 className="skills__name">Lightroom</h3>
                        <span className="skills__level">Basic</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Design