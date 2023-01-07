import React from 'react'
import SkillsListElement from '../Coponents/SkillsListElement'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMailBulk, faPhone, faLocation } from '@fortawesome/free-solid-svg-icons'

import Avatar from '../Assets/avatar.png'

function NamePage() {

    const SkillsList = 
    [
        {name:'HTML/Css',progress:100,color:'#42a5f5',},
        {name:'React.js',progress:80,color:'#5ed3f3',},
        {name:'JavaScript',progress:80,color:'#efd81d',},
        {name:'Node.js',progress:40,color:'#7fc728',},
        {name:'MongoDB',progress:20,color:'#439743',},
        {name:'Figma',progress:40,color:'#af8fcf',},
        {name:'GitHub',progress:20,color:'#2d333b',},
        {name:'C++',progress:20,color:'#6295cb',},
        {name:'SQL',progress:20,color:'#dc7435',},
    ]
    const Skills = SkillsList.map(skill =>
        (
            <SkillsListElement 
                key={skill.name}
                name={skill.name}
                progress={skill.progress}
                color={skill.color}
                />
        ))

  return (
    <div className='name-page'>

        <div className="left">

        <h1>Franciszek Kaniewski</h1>

        <div className="contact">
        <h5><FontAwesomeIcon icon={faMailBulk} /> fkaniewski.web@gmail.com</h5>
        <h5><FontAwesomeIcon icon={faLocation} />Strzelecka 9, 9-400 Płock</h5>
        <h5><FontAwesomeIcon icon={faPhone} /> +48 604 947 826</h5>
        </div>

        <div className="skills">
            <ul>
                {Skills}
            </ul>
        </div>

        </div>

        <div className="right">
            <img src={Avatar} alt="" className="avatar" />
            
            <h5>&lt;Cechy
                <ul>
                    <li>Opanowanie</li>
                    <li>Chęć nauki</li>
                    <li>Zdolność szybkiej nauki</li>
                    <li>Zdolność adaptacji</li>
                </ul>
                <span>/&gt;</span>
            </h5>
            <h5>&lt;Zainteresowania
                <ul>
                    <li>Jazda na rowerze</li>
                    <li>Tworzenie gier</li>
                    <li>Uprawianie sportu</li>
                    <li>eSport</li>
                </ul>
                <span>/&gt;</span>
            </h5>
        </div>

    </div>
  )
}

export default NamePage