import React from 'react'
import '../Css/App.css'

import school from '../Assets/school.png'
import course from '../Assets/courses.png'
import experience from '../Assets/experience.png'
import activities from '../Assets/CityCoders.png'


function SamplePage({title,dc,img}) {
  return (
    <>
    <div className='sample-page'>
      <div className="left">
        <div className="content">
        <h1>{title}</h1>
        {dc}
        </div>
      </div>
      <div className="right">
        <img className='school-png' src={img} alt="" />
      </div>

    </div>
    </>
  )
}

export default SamplePage