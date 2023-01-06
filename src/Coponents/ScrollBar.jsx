import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faSchool, faComputer, faHandshakeAlt, faUsers, faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons'


function ScrollBar({procent, setProcent}) {

  const moveLeft =()=>{
    if(procent > 0) setProcent(procent - 100)
  }
  
  const moveRight =()=>{
    if(procent < 400) setProcent(procent + 100)
  }

  return (
    <div className='scroll-bar'>
      <span onClick={(e)=> moveLeft()}><FontAwesomeIcon icon={faAngleLeft}/></span>
      <span> <FontAwesomeIcon icon={faUser} /> </span>
      <span> <FontAwesomeIcon icon={faSchool} /></span>
      <span> <FontAwesomeIcon icon={faComputer} /> </span>
      <span> <FontAwesomeIcon icon={faHandshakeAlt} /> </span>
      <span> <FontAwesomeIcon icon={faUsers} /> </span>
      <span onClick={(e)=> moveRight()}><FontAwesomeIcon icon={faAngleRight}/></span> 	
    </div>
  )
}

export default ScrollBar