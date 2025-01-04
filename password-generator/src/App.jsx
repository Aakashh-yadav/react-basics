import { useState } from "react";

import "./App.css";

function App() {
  const [length, setlength] = useState(8);
  const [numballowed, setnumballowd] = useState(false);
  const[charallowed,setcharallowed]=useState(flase)
  const [password, setpassword] = useState("");
  return (
    <>
      <h1 className="text-4xl text-center  text-pink-600">
        Password-generator
      </h1>
    </>
  );
}

export default App;
