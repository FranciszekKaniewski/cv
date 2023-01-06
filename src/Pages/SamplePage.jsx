import React from 'react'
import '../Css/App.css'

function SamplePage({title,dc}) {
  return (
    <>
    <div className='sample-page'>
      <div className="left">
        <h1>{title}</h1>
        <h4>{dc}</h4>
      </div>
      <div className="right">
        
      </div>

    </div>
    </>
  )
}

export default SamplePage