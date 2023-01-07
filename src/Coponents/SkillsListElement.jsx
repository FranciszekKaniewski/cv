import React from 'react'

function SkillsListElement({name,progress,color}) {

  let gradientColor = `linear-gradient(90deg, ${color} 0%, #fafafa 100%)`

  return (
    <li>
        {name}
        <div className="progres-bar" >
            <div className="bgc" style={{background: gradientColor, right: `${100-progress}%`}}></div>
        </div>
    </li>
  )
}

export default SkillsListElement