import React,{useState} from 'react'
import './DropDownInfo.css'
import { AiFillCaretLeft } from "react-icons/ai";


function DropDownInfo() {

    const[infoOpen, setInfoOpen]= useState(false)

const DropDownHandler=() =>{
     infoOpen === true? setInfoOpen(false) : setInfoOpen(true)
}

  return (
   <div className='dropdown__container'>
 <div className='dropdown__bar'>
        <text className='dropdown-text'>¿Cuántas veces te preguntaste cómo calcular tu sueldo o el que vas a percibir?</text>
        <AiFillCaretLeft size={30} onClick={DropDownHandler}  color='#fff' className={!infoOpen ?' dropdown__icon-open' :' dropdown__icon-closed'}/>
    </div>
   {infoOpen &&
       <p>
       Conocer o definir el sueldo que se quiere ganar suele ser una de las dificultades que se presenta al momento de cambiar de empleo y evaluar propuestas de trabajo de otras empresas.
   <br/>
   Por ello desde Aliantec te ofrecemos esta calculadora con la que podrás estimar el salario neto mensual, y para eso lo principal es conocer el sueldo bruto que recibirás. A partir de allí, al volcar los conceptos obligatorios a deducir, podrás obtener un sueldo aproximado «de bolsillo»; en otras palabras, el sueldo neto.
   <br/>
   Lo que se denomina «sueldo neto» es la cantidad exacta con la que finalmente se contará. La diferencia con el sueldo bruto, es que éste es la suma fija que se percibirá antes de que se produzcan las retenciones correspondientes.
   <br/>
     Por este motivo, es importante conocer el salario neto y cómo calcularlo, ya que los contratos siempre fijan la cantidad bruta que percibirá el trabajador.
     <br/>
   Utilizá esta herramienta para estar seguro/a de que lo que te pagan es correcto y si estás haciendo los aportes que corresponden por ley.
       </p>
   }
   </div>
  )
}

export default DropDownInfo