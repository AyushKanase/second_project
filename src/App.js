import logo from './logo.svg';
import './App.css';

function App() {
let num=2;
let num2=4;
let sum=0

function onSubmit() {
sum=num+num2

    
       console.log("Addition is" + sum );
    
    
  
}




  return (
    <button className='btnSubmit ' onClick={onSubmit}>submit</button>
    
      
  );
  
}

export default App;
