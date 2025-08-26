import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [number1,setNumber1]=useState()
  const [number2,setNumber2]=useState()
  const [sum,setSum]=useState()


  function onSubmit(){
    setSum(number1+number2)
    
  }
  const handleNum=(event)=>{
    setNumber1 (parseInt(event.target.value));

  }
    const handleNum2=(event)=>{
      setNumber2 (parseInt(event.target.value));
    }
     

  



  return (
    <div>
      <input name="number1" value={number1} onChange={handleNum}/>
      <input name="number2" value={number2} onChange={handleNum2}/>

      
    <button className='btnSubmit' onClick={onSubmit}>submit</button>
    <div>sum is {sum}</div>
    
    
      </div>
  );
  
}

export default App;
