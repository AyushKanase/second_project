import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [number1, setNumber1] = useState("")
  const [number2, setNumber2] = useState("")
  const [sum, setSum] = useState("")
  const [mult, setMult] = useState("")
  const [div, setDiv] = useState("")
  const [sub, setSub] = useState("")

  function onSubmitAddition() {
    setSum(number1 + number2);
    setMult(undefined);
    setDiv(undefined);
    setSub(undefined);
  }

  function onSubmitMultiplication() {
    setMult(number1 * number2);
    setSum(undefined);
    setDiv(undefined);
    setSub(undefined);
  }
  function onSubmitDivision() {
    setDiv(number1 / number2)
    setSum(undefined)
    setMult(undefined)
    setSub(undefined)
  }
  function onSubmitSubtraction() {
    setSub(number1 - number2)
    setSum(undefined)
    setMult(undefined)
    setDiv(undefined)
  }


  const handleNum = (event) => {
    setNumber1(parseInt(event.target.value));

  }
  const handleNum2 = (event) => {
    setNumber2(parseInt(event.target.value));

  }






  return (
    <div>
      <input name="number1" value={number1} onChange={handleNum} />
      <input name="number2" value={number2} onChange={handleNum2} />


      <div> <button className='btnSubmit' onClick={onSubmitAddition}>Add</button></div>
      <div> <button className='btnSubmit' onClick={onSubmitMultiplication}>Mult</button></div>
      <div> <button className='btnSubmit' onClick={onSubmitDivision}>Div</button></div>
      <div> <button className='btnSubmit' onClick={onSubmitSubtraction}>Sub</button></div>

      <div>
{
  sum!==undefined && <h1>Addition is{number1}and{number2}:{sum}</h1>
  
}
{mult!==undefined && <h1>Multiplication is{number1}and{number2}:{mult}</h1>}
{div!==undefined && <h1>Division is{number1}and{number2}:{div}</h1>}
{sub!==undefined && <h1>Subtraction is{number1}and{number2}:{sub}</h1>}


  



        
      </div>







    </div>

  );

}

export default App;
