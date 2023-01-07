import React from 'react'
import '../Css/App.css'

function SamplePage({title,dc}) {
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
        
      </div>

    </div>
    </>
  )
}

export default SamplePage