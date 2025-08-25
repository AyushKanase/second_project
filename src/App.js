import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [age,ageSet]=useState()
  const [showBlock,setShowblock]=useState(false)

  function handelAge(event){
    ageSet(event.target.value);
    
  }
  function onSubmit(){
    setShowblock(true);
  }
  









  return (
    <div>
      <input name="age" value={age} onChange={handelAge}/>
      
    <button className='btnSubmit ' onClick={onSubmit}>submit</button>
    <div>
      {showBlock &&
      <div>{age}</div>}
    </div>
    
      </div>
  );
  
}

export default App;
