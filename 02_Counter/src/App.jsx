import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  let [counter, AyushCounter] = useState(10); // for increase value
  // let [counters, setCounter] = useState(10); // for decrease value

  // let counter = 0

  // increase counter value
  const addValue = () => {
    counter = counter + 1;
    AyushCounter(counter);
    console.log("Clicked", counter);
  };

  // decrease counter value
  const decreaseValue = () => {
    // setCounter(counters - 1);

    if(counter>0)  // TODO: Homework => counter value should be +ve or 0.
    {
      AyushCounter(counter - 1);
      console.log("Clicked", counter);
    }
   
  };

 

  return (
    <>
      <h1>Chai aur React </h1>
      <p>Counter value: {counter}</p>

      <button onClick={addValue}>Add Value {counter}</button>
      <br />
      <button onClick={decreaseValue}>Decrease Value {counter}</button>
    </>
  );
}

export default App;
