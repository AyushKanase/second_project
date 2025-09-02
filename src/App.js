import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
 const student = { name: "Ayush", age: 20, marks: 90 };  


  return (
    <div>
          Name: {student.name}
          Age:{student.age}
          Marks:{student.marks}
    </div>
   
  );

}

export default App;
