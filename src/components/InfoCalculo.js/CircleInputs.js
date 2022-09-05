import React from 'react'
import InfoContainer from './InfoContainer'

function CircleInputs() {
  return (
   <div className='full-container'>
     <InfoContainer text="PORCENTAJE DE APORTES AL SINDICATO" circleNumb='first'/>
    <InfoContainer text='ALQUILER MENSUAL' circleNumb='second'/>
    <InfoContainer text='SUELDO BRUTO' circleNumb='third'/>
   </div>
  )
}

export default CircleInputs