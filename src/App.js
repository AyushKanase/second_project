import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
const students = [
    { id: 1, name: "Ayush", age: 20, marks: 90 },
    { id: 2, name: "person1", age: 25, marks: 90 },
    {id:3,name:"person2",age:30,marks:90}
  ];


  return (
    <table border="1">
       
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Marks</th>
          </tr>
     
       
          {students.map((singleObject) => (
            <tr key={singleObject}>
              <td>{singleObject.name}</td>
              <td>{singleObject.age}</td>
              <td>{singleObject.marks}</td>
            </tr>
          ))}
       
      </table>
  );

}

export default App;
