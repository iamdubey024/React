import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Card from "./components/Card.jsx";

function App() {
  //  let myObj = {
  //   usrname: "ayush",
  //   age: 21
  //  }

  //  let newArr = [1,2,3]
  return (
    <>
      <h1 className="bg-blue-300 bg text-black p-4 rounded-2xl mb-3">
        Hi! Tailwind CSS with Props
      </h1>
      <Card username="Ayush" btnText="Visit me" />
      {/* if some user removes btnText from second card then we must use default values */}
      <Card username="Dubey" />
    </>
  );
}

export default App;
