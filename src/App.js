import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0)
  
function handleIncrement(){
  setCount(count+1)
}

  return (<div>
   <div>{count}</div>
  <div> <button className='btnSubmit' onClick={handleIncrement}>Increment</button></div>
      
      </div>
  );

}

export default App;
