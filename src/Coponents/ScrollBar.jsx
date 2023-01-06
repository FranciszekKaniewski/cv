import React from 'react'

function ScrollBar({procent, setProcent}) {

  const moveLeft =()=>{
    if(procent > 0) setProcent(procent - 100)
  }
  
  const moveRight =()=>{
    if(procent < 400) setProcent(procent + 100)
  }

  return (
    <div className='scroll-bar'>
      <span onClick={(e)=> moveLeft()}>&lt; </span>
      <span>- </span>
      <span>- </span>
      <span>- </span>
      <span>- </span>
      <span>- </span>
      <span onClick={(e)=> moveRight()}>&gt;</span> 	
    </div>
  )
}

export default ScrollBar