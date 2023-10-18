import { useState } from "react";

import "./App.css";

function App() {
  


    const [lightColor, setLightColor] = useState(false)

   const handleClick= ()=>{

    // with inverter (boolean) 
   setLightColor(!lightColor);

   // with if else we setted 

    // if (lightColor=== true) {
    //   setLightColor(false);
    // } else{
    //   setLightColor(true);
    // }

   };
    return (
   <div style={{height:"100vh", width:"100vw",background: lightColor===true ? "pink": "black"}}>
    <button onClick={handleClick}>Click</button>
   </div>

    )
}

export default App;
