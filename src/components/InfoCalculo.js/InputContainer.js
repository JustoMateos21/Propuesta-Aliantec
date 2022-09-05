import React from 'react'
import './InputContainer.css'
function InputContainer() {
  return (
    <div className='inp__container'>
        <text className='inp-title'>Cantidad de hijos a cargo</text>
      <div className='inputs__container'>
      <input className='input'></input>
      <select className='select'>
        <option>50%</option>
        <option>100%</option>
      </select>
      </div>
    </div>
  )
}

export default InputContainer