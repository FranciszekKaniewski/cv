import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faSchool, faComputer, faHandshakeAlt, faUsers, faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons'


function ScrollBar({procent, setProcent}) {

  let buttonStyle={color:'var(--main)'}

  const moveLeft =()=>{
    if(procent > 0) setProcent(procent - 100)
  }
  
  const moveRight =(e)=>{
    if(procent < 400) setProcent(procent + 100)
  }

  const moveTo =(position)=>{
    setProcent(position)
  }

  return (
    <div className='scroll-bar'>
      <span style={procent === 0 ? {color:'gray'}: null} onClick={()=> moveLeft()}><FontAwesomeIcon icon={faAngleLeft}/></span>
      <span style={procent === 0 ? buttonStyle : null}onClick={()=> moveTo(0)}> <FontAwesomeIcon icon={faUser} /> </span>
      <span style={procent === 100 ? buttonStyle : null} onClick={(e)=> moveTo(100)}> <FontAwesomeIcon icon={faSchool} /></span>
      <span style={procent === 200 ? buttonStyle : null}onClick={()=> moveTo(200)}> <FontAwesomeIcon icon={faComputer} /> </span>
      <span style={procent === 300 ? buttonStyle : null}onClick={()=> moveTo(300)}> <FontAwesomeIcon icon={faHandshakeAlt} /> </span>
      <span style={procent === 400 ? buttonStyle : null}onClick={()=> moveTo(400)}> <FontAwesomeIcon icon={faUsers} /> </span>
      <span style={procent === 400 ? {rotate:'90deg', color:'var(--main)'}: null} onClick={()=> moveRight()}><FontAwesomeIcon icon={faAngleRight}/></span>
    </div>
  )
}

export default ScrollBar