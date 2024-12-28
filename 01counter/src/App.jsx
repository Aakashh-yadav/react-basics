import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  let [counter, setcounter] = useState(0);

  const Inc_val = () => {
    if (counter == 20) {
      alert("This value can't be more then this ");
      return;
    }
    setcounter(counter + 1);
  };
  const Dec_val = () => {
    if (counter == 0) {
      alert("This value can't be lesser then this");
      return
    }
    setcounter(counter - 1);
  };
  return (
    <>
      <h1>Aakash yadav</h1>
      <h2>Counter value: {counter}</h2>
      <button onClick={Inc_val}>add value</button>
      <br />
      <button onClick={Dec_val}>sub value</button>
    </>
  );
}

export default App;
