import logo from './logo.svg';
import './App.css';

function App() {
let num=2;


function onSubmit() {
  if(num%2===0)
    { 
       console.log("Number is even" + num );
    }
    else
    {
      console.log("Number is odd" + num);
    }
  
}




  return (
    <button className='btnSubmit ' onClick={onSubmit}>submit</button>
    
      
  );
  
}

export default App;
