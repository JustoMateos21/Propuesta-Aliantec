import React from 'react'
import Options from './Options'
import './OptionsContainer.css'

function OptionsContainer() {
  return (
    <div className='options__container'>
        <Options text='¿Tenes un conyuge a cargo?'/>
     <Options text='¿Trabajas en la Patagonia?'/>
    </div>
  )
}

export default OptionsContainer