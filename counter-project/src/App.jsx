import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {

  let [count,setCount]=useState(0)

  //let count = 5;
  function IncreaseValue() {
    if(count<20)
      setCount(++count);
  }
  function DecreaseValue(){
    if(count>0)
      setCount(--count);
  }
  return (
    <>
      <h1>Counter Project</h1>
      <h2>Counter Value : {count}</h2>
      <button onClick={IncreaseValue}>Increase Value</button>
      <button onClick={DecreaseValue}>Decrease Value</button>
    </>
  );
}

export default App;
