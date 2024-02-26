import React from 'react'
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

function MyApp() {
  return (
    <div>
      <h1>Hello</h1>
      <p>My name is Ayush</p>
    </div>
  );
}

// react doesn't understand this format because it converts our react code in this format and show output on web
// And react developers already define object format for running all codes and we create our own object

// const ReactElement = {
//     type: "a",
//     props :{
//         href: "https://google.com",
//         target: "_blank",
//     },
//     children: "click me to visit google"
// }

// const anotherElement = (<a href="https://google.com" target="_blank">Click to visit google</a>)

const anothetUser = "Ayush"
const reactElement = React.createElement(
    'a',
    {href: 'https://google.com', target: '_blank'},
    "Click me to visit google",
    anothetUser
)

ReactDOM.createRoot(document.getElementById("root")).render(
   <App />

);
