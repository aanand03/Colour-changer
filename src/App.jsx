import { useState } from "react";
import "./App.css";

function App() {
  const [color, setColor] = useState("olive");
  return (
    <div
      className="w-full h-screen duration-200"
      style={{ backgroundColor: color }}
    >
      <div
        className="fixed flex flex-wrap 
       justify-center  inset-x-0 bottom-36 px-2"
      >
        <div
          className="fixed flex flex-wrap justify-center gap-3 
          outline-none shadow-xl bg-white rounded-2xl p-2 "
        >
          <button
            onClick={() => setColor("red")}
            className="bg-red-600 shadow-3xl rounded-2xl p-2"
          >
            red
          </button>
          <button
            onClick={() => setColor("blue")}
            className="bg-blue-600 shadow-3xl rounded-2xl p-2"
          >
            blue
          </button>
          <button
            onClick={() => setColor("green")}
            className="bg-green-600 shadow-3xl rounded-2xl p-2"
          >
            green
          </button>
          <button
            onClick={() => setColor("brown")}
            className="shadow-3xl rounded-2xl p-2"
            style={{ backgroundColor: "brown" }}
          >
            brown
          </button>
          <button
            onClick={() => setColor("gray")}
            className=" shadow-3xl rounded-2xl p-2"
            style={{ backgroundColor: "Gray" }}
          >
            gray
          </button>
          <button
            onClick={() => setColor("yellow")}
            className=" shadow-3xl rounded-2xl p-2"
            style={{ backgroundColor: "yellow" }}
          >
            yellow
          </button>
          <button
            onClick={() => setColor("pink")}
            className=" shadow-3xl rounded-2xl p-2"
            style={{ backgroundColor: "pink" }}
          >
            pink
          </button>
          <button
            onClick={() => setColor("purple")}
            className=" shadow-3xl rounded-2xl p-2"
            style={{ backgroundColor: "purple" }}
          >
            purple
          </button>
          <button
            onClick={() => setColor("lavender")}
            className=" shadow-3xl rounded-2xl p-2"
            style={{ backgroundColor: "lavender" }}
          >
            lavender
          </button>
          <button
            onClick={() => setColor("white")}
            className=" shadow-3xl rounded-2xl p-2"
            style={{ backgroundColor: "white" }}
          >
            white
          </button>
          <button
            onClick={() => setColor("black")}
            className=" shadow-3xl rounded-2xl p-2 text-white"
            style={{ backgroundColor: "black" }}
          >
            black
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
