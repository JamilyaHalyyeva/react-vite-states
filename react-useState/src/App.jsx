import { useState } from "react";

import "./App.css";

function App() {
  

  //counter is called STATE
  //serCounter is teh function to  update the state
  //setCounter returns An Array

  const [counter, setCounter] = useState(0);

  console.log("APP IS RENDERING: ", counter);
  console.log("BEFORE RENDERING ");

  const handleClick = () => {
    setCounter(counter + 1);
    // console.log("˜counter: ˜", counter);
  };
    
  const handleDecrease = () => {
    setCounter(counter - 1);
  };

  const handleReset=()=>{
    setCounter(0);
  }

  function calcCounter  (){
    if ( counter >= 0){
      return 'Couter is positive (it called with if else)';
    } else{
      return 'Counter is negative (it called with if else)';
    }
  }

  return (
    <div>
      <button onClick={handleClick}>Increase</button>
      <button onClick={handleReset}>Reset</button>
      <button onClick={handleDecrease }>Decrease</button>
      <div>{counter}</div>
      <div>{counter > 0 ? 'Counter is positive':
      'Counter is negative'}</div>
      {counter > 0 ? <div> yellow Box</div>: null}
      <div>{calcCounter()}</div>
      {counter > 0 && <div>Green Box </div>}
      {counter === 0 && <div>Grey Box</div>}
      {counter < 0 && <div>Red Box </div>}
    </div>
  );

  //   const [lightColor, setLightColor] = useState(0)

  //  const handleClick= ()=>{

  //  }
  //   return (
  //  <div style={{height:"100vh", width:"10vw"}}>
  //   <button onClick={handleClick}>Click</button>
  //  </div>

  //   )
}

export default App;
