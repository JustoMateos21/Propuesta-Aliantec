import React from 'react'
import './FinalInput.css'
function FinalInput(props) {
  return (
    <div className='container'>
        <text className='text'>{props.text}</text>
        <input className='input'></input>
    </div>
  )
}

export default FinalInput