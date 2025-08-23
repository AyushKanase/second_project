import logo from './logo.svg';
import './App.css';

function App() {
let arr=[10,30,50,38,50,90,70,80,40]
let sum=0



function onSubmit() {
arr.map((singleObj)=>{
  sum+=singleObj
})


    
       console.log("Addition is " +" "+ sum);
    
    
  
}




  return (
    <button className='btnSubmit ' onClick={onSubmit}>submit</button>
    
      
  );
  
}

export default App;
