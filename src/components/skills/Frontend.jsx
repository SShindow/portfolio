import React from 'react'
import HTML from '../../assets/skills-fe_html.svg'
import CSS from '../../assets/skills-fe_css.svg'
import JS from '../../assets/skills-fe_js.svg'
import REACT from '../../assets/skills-fe_react.svg'
import BOOTSTRAP from '../../assets/skills-fe_bootstrap.svg'
import SASS from '../../assets/skills-fe_sass.svg'

const Frontend = () => {
  return (
    <div className="skills__content">
        <h3 className="skills__title">Frontend</h3>

        <div className="skills__box">
            <div className="skills__group">
                <div className="skills__data">
                    <img src={HTML} alt="HTML" className='skills__img'/>

                    <div>
                        <h3 className="skills__name">HTML</h3>
                        <span className="skills__level">Intermediate</span>
                    </div>
                </div>

                <div className="skills__data">
                    <img src={CSS} alt="CSS" className='skills__img'/>
                    <div>
                        <h3 className="skills__name">CSS</h3>
                        <span className="skills__level">Intermediate</span>
                    </div>
                </div>

                <div className="skills__data">
                    <img src={JS} alt="JS" className='skills__img'/>
                    <div>
                        <h3 className="skills__name">JavaScript</h3>
                        <span className="skills__level">Intermediate</span>
                    </div>
                </div>

                <div className="skills__data">
                    <img src={REACT} alt="REACT" className='skills__img'/>
                    <div>
                        <h3 className="skills__name">REACT</h3>
                        <span className="skills__level">Intermediate</span>
                    </div>
                </div>

                <div className="skills__data">
                    <img src={BOOTSTRAP} alt="BOOTSTRAP" className='skills__img'/>
                    <div>
                        <h3 className="skills__name">Bootstrap</h3>
                        <span className="skills__level">Intermediate</span>
                    </div>
                </div>

                <div className="skills__data">
                    <img src={SASS} alt="Sass" className='skills__img'/>
                    <div>
                        <h3 className="skills__name">Sass</h3>
                        <span className="skills__level">Intermediate</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Frontend