import { useState } from "react";

import "./App.css";

function App() {

const [input,setInput]=useState('');
const [todos, setToDos]=useState([]);

  // let input=""; 
  
  // const todos=[];

  const handleChange=(e)=>{
    setInput(e.target.value);
    console.log(e.target.value);
  }
  const handleAdd=()=>{
    setToDos([... todos, input])
    console.log("todos: ", todos);

  }

  return (
    <div>
   <input onChange={handleChange}  />
   <button onClick={handleAdd}>Add</button>
   <ul>{todos.map ((item)=>(
    <li>{item}</li>
   ))}
   </ul>
    </div>
  
  );


}

export default App;
