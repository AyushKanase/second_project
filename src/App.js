import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [number1,setNumber1]=useState()
  const [number2,setNumber2]=useState()
  const [sum,setSum]=useState()
const [mult,setMult]=useState()
const [div,setDiv]=useState()
const [sub,setSub]=useState()

  function onSubmitAddition(){
    setSum(number1+number2)}

    function onSubmitMultiplication(){
      setMult(number1*number2)
    }
    function onSubmitDivision(){
    setDiv(number1/number2)

    }
    function onSubmitSubtraction(){
          setSub(number1-number2)

    }
    
  
  const handleNum=(event)=>{
    setNumber1 (parseInt(event.target.value));

  }
    const handleNum2=(event)=>{
      setNumber2 (parseInt(event.target.value));
      {}
    }
     

  



  return (
    <div>
      <input name="number1" value={number1} onChange={handleNum}/>
      <input name="number2" value={number2} onChange={handleNum2}/>
      
      
    <button className='btnSubmit' onClick={onSubmitAddition}>Add</button>
    <button className='btnSubmit' onClick={onSubmitMultiplication}>Mult</button>
    <button className='btnSubmit' onClick={onSubmitDivision}>Div</button>
    <button className='btnSubmit' onClick={onSubmitSubtraction}>Sub</button>
    
    
    { sum ? onSubmitAdditionIfTrue:}

    

    {mult?MultiplicationIftrue:expressionIfFalse}
    

    {div?DivisionIftrue:expressionIfFalse}
    

    {sub?SubtractionIftrue:expressionIfFalse}  
    
  
    
    
    
      </div>

  );
  
}

export default App;
