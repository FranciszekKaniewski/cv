import React from 'react'

function SkillsListElement({name,progress,color}) {
  return (
    <li>
        {name}
        <div className="progres-bar" >
            <div className="bgc" style={{backgroundColor: color, right: `${100-progress}%`}}></div>
        </div>
    </li>
  )
}

export default SkillsListElement