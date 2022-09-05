import './App.css';
import FinalInput from './components/InfoCalculo.js/FinalInput';
import InputContainer from './components/InfoCalculo.js/InputContainer';
import NavBar from './components/Navbar/NavBar';
import Table from './components/Table/Table';
import TitleContainer from './components/TitleContainer';
import CircleInputs from './components/InfoCalculo.js/CircleInputs';
import OptionsContainer from './components/InfoCalculo.js/OptionsContainer';
import DropDownInfo from './components/DropDownInfo/DropDownInfo';

function App() {
  return (
    <div className="App">
     <NavBar/>
     <TitleContainer/>
     <DropDownInfo/>
   <CircleInputs/>
    <OptionsContainer/>
     <InputContainer/>
     <FinalInput text='Cantidad de vacaciones por año'/>
     <FinalInput text='Retribuciones no remunerativas'/>
     <button className='calcular-btn'>Calcular</button>
     <Table/>
    </div>
  );
}

export default App;
