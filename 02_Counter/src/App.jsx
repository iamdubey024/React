import { useState } from "react";
import "./App.css";

function App() {
  let [counter, AyushCounter] = useState(10); // for increase value
  // let [counters, setCounter] = useState(10); // for decrease value

  // let counter = 0

  // increase counter value
  if(counter<20)
  {
    const addValue = () => {
    counter = counter + 1;
    AyushCounter(counter);
    // console.log("Clicked", counter);
  }
  
  };

  // decrease counter value
  const decreaseValue = () => {
    // setCounter(counters - 1);

    if (counter > 0) {
      // TODO: Homework => counter value should be less than 20 and 0.
      AyushCounter(counter - 1);
      // console.log("Clicked", counter);
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
