import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
const students = [
    { rollNo: 1, name: "Ayush", age: 20, marks: 90,education:"SYBCS" },
    { rollNo: 2, name: "person1", age: 25, marks: 90 ,education:"TYBCS"},
    {rollNo:3,name:"person2",age:30,marks:90,education:"TYBCA"},
    {rollNo:4,name:"person3",age:35,marks:90,education:"TYBCA"}
  ];


  return (
    <table border= {1}>
       
          <tr>
            <th>Roll No.</th>
            <th>Name</th>
            <th>Age</th>
            <th>Education</th>
            <th>Marks</th>
            
          </tr>
     
       
          {students.map((singleObject) => (
            <tr key={singleObject}
            style={{ backgroundColor: singleObject.age > 30 ? "black" : "inherit",color:'grey' }}>
              <td>{singleObject.rollNo}</td>
              <td>{singleObject.name}</td>
              <td>{singleObject.age}</td>
              <td>{singleObject.education}</td>
              <td>{singleObject.marks}</td>
            </tr>
          ))}
       
      </table>
  );

}

export default App;
