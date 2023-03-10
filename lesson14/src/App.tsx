import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { Counter } from "./Counter";

function App() {
  return (
    <div className="App">
      <Counter children={(num: number) => <>Current count : {num}</>} />
    </div>
  );
}

export default App;
