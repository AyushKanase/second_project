import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [number,setNumber]=useState()
  const [number2,setNumber2]=useState()
  const [sum,setSum]=useState()

  function handelvalue(event){
    setNumber(event.target.value);
    
  }
  function onSubmit(){
    sum=number+number2
    setNumber2()
  }
  



  return (
    <div>
      <input name="number" value={number2} onChange={handelvalue}/>
      
    <button className='btnSubmit' onClick={onSubmit}>submit</button>
    
    
      </div>
  );
  
}

export default App;
