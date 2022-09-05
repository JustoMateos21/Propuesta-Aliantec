import React from 'react'
import './Options.css'

function Options(props) {
  return (
    <div className='opt__container'>
     <text className='text'>{props.text}</text>
     <div className='buttons__container'>
        <button className='btn'>Si</button>
        <button className='btn'>No</button>
     </div>
    </div>
  )
}

export default Options