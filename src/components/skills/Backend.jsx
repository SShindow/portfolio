import React from 'react'
import NODEJS from '../../assets/skills-be_nodejs.svg'
import PYTHON from '../../assets/skills-be_python.svg'
import MYSQL from '../../assets/skills-be_mysql.svg'
import CPP from '../../assets/skills-be_cpp.svg'
import FIREBASE from '../../assets/skills-be_firebase.svg'
import JAVA from '../../assets/skills-be_java.svg'

const Backend = () => {
  return (
    <div className="skills__content">
        <h3 className="skills__title">Backend</h3>

        <div className="skills__box">
            <div className="skills__group">
                <div className="skills__data">
                    <img src={NODEJS} alt="NodeJS" className='skills__img'/>
                    <div>
                        <h3 className="skills__name">NodeJS</h3>
                        <span className="skills__level">Basic</span>
                    </div>
                </div>

                <div className="skills__data">
                    <img src={JAVA} alt="Java" className='skills__img'/>
                    <div>
                        <h3 className="skills__name">Java</h3>
                        <span className="skills__level">Intermediate</span>
                    </div>
                </div>

                <div className="skills__data">
                    <img src={CPP} alt="C/C++" className='skills__img'/>
                    <div>
                        <h3 className="skills__name">C/C++</h3>
                        <span className="skills__level">Intermediate</span>
                    </div>
                </div>

                <div className="skills__data">
                    <img src={PYTHON} alt="Python" className='skills__img'/>
                    <div>
                        <h3 className="skills__name">Python</h3>
                        <span className="skills__level">Basic</span>
                    </div>
                </div>

                <div className="skills__data">
                    <img src={MYSQL} alt="MySQL" className='skills__img'/>
                    <div>
                        <h3 className="skills__name">MySQL</h3>
                        <span className="skills__level">Basic</span>
                    </div>
                </div>

                <div className="skills__data">
                    <img src={FIREBASE} alt="FIREBASE" className='skills__img'/>
                    <div>
                        <h3 className="skills__name">Firebase</h3>
                        <span className="skills__level">Basic</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Backend