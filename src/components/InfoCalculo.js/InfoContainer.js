import React from 'react'
import './InfoContainer.css'
function InfoContainer(props) {
  return (
    <div className='circle__container '>
        <text className='text'>{props.text}</text>
        <div className={`circle ${props.circleNumb}`}>
    <input className='input' placeholder='$' type='text'></input>
        </div>
        </div>
  )
}

export default InfoContainer