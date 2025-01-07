import { useCallback, useEffect, useRef, useState } from "react";

function App() {
  let [length, setlength] = useState(8);
  let [numballowed, setnumballowd] = useState(false);
  let [charallowed, setcharallowed] = useState(false);
  let [password, setpassword] = useState("");
  let passwordgenerator = useCallback(() => {
    let pass = "";

    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numballowed) str += "0123456789";
    if (charallowed) str += "!@#$%^&*()_+-";
    for (let i = 0; i < length; i++) {
      pass += str.charAt(Math.floor(Math.random() * str.length)); //This is also used in generating otp's
    }
    setpassword(pass);
  }, [length, numballowed, charallowed, setpassword]);
  const copy_ref = useRef(null);
  const copytoclipboard = useCallback(() => {
    //we can also select range of the selection with the help of
    // copy_ref.current?.setSelectionRange(0, 5); this is the code from which i can select the disered lenght of prefered feild
    // copy_ref.current?.setSelectionRange(0, {length}); this is the another way to select the whole length of the prefered feild
    copy_ref.current?.select();
    navigator.clipboard.writeText(password);
    // alert('text copied')
  }, [password]);

  useEffect(() => {
    passwordgenerator();
  }, [length, numballowed, charallowed, passwordgenerator]);
  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-700">
        <h1 className="text-white text-center py-2 ">Password Generator</h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input
            type="text"
            value={password}
            className="outline-none w-full py-1  "
            placeholder="password"
            readOnly
            ref={copy_ref}
          />
          <button
            className="outline-none text-white text-center bg-blue-600 text-md"
            onClick={copytoclipboard}
          >
            copy
          </button>
        </div>
        <div className="flex flex-col">
          <div className="flex justify-between">
            <div className="flex flex-col">
              <label className="text-white text-sm">
                Length range : {length}
              </label>
              <input
                type="range"
                value={length}
                min={6}
                max={100}
                onChange={(e) => setlength(e.target.value)}
                className="outline-none text-sm "
              />
            </div>
            <div className="flex flex-col">
              <label className="text-white text-sm">Number</label>
              <input
                type="checkbox"
                checked={numballowed}
                onChange={() => {
                  setnumballowd((prev) => !prev);
                }}
                className="outline-none text-sm"
              />
            </div>
            <div className="flex flex-col">
              <label className="text-white text-sm">Char</label>
              <input
                type="checkbox"
                checked={charallowed}
                onChange={() => {
                  setcharallowed((prev) => !prev);
                }}
                className="outline-none text-sm"
              />
            </div>
          </div>
          <button
            onClick={passwordgenerator}
            className="outline-none text-white text-center bg-blue-600 text-md"
          />
        </div>
      </div>
    </>
  );
}

export default App;
