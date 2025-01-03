import { useState } from "react";

function App() {
  const [color, setColor] = useState("olive");

  return (
    <>
      <div
        className="w-full h-screen flex flex-col justify-end duration-200"
        style={{ backgroundColor: color }}
      >
        {/* Main Content */}
        <div className="flex flex-col items-center mb-8">
          <h1 className="text-white text-2xl mb-4">Dynamic Background</h1>
          <p className="text-white text-lg">
            Select a color to change the background!
          </p>
        </div>

        {/* Buttons at the Bottom */}
        <div className="flex justify-center gap-4 p-4">
          <button
            onClick={() => setColor("blue")}
            className="px-4 py-2 bg-blue-500 text-white rounded-xl"
          >
            Blue
          </button>
          <button
            onClick={() => setColor("green")}
            className="px-4 py-2 bg-green-500 text-white rounded-xl"
          >
            Green
          </button>
          <button
            onClick={() => setColor("red")}
            className="px-4 py-2 bg-red-500 text-white rounded-xl"
          >
            Red
          </button>
          <button
            onClick={() => setColor("olive")}
            className="px-4 py-2 bg-green-300 text-white rounded-xl"
          >
            default
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
