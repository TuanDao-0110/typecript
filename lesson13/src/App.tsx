import { useCallback, useEffect, useState, MouseEvent, KeyboardEvent, useMemo, useRef } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
interface User {
  id: number;
  username: string;
}
type fibFunc = (n: number) => number;
const fib: fibFunc = (n) => {
  if (n < 2) return n;
  return fib(n - 1) + fib(n - 2);
};

const myNum: number = 37;
function App() {
  // set up ref as specified element
  const inputRef = useRef<HTMLInputElement>(null);
  console.log(inputRef?.current);
  console.log(inputRef?.current?.value);
  // 1. set up type for useState
  const [count, setCount] = useState<number>(0);
  const [users, setUsers] = useState<User[] | null>();

  // const [count, setCount] = useState<User[]>();
  // 2. use effect
  useEffect(() => {
    console.log("mounting");
    console.log("users:", users);
    return () => {
      console.log("unmounting");
    };
  }, [users]);
  // 1. set up useCallback, we can set up type of callback fn, parameter type also
  const addTwo = useCallback((e: MouseEvent<HTMLButtonElement> | KeyboardEvent<HTMLButtonElement>): void => {
    setCount((prev) => prev + 1);
  }, []);
  // 3. if myNum changed, this Fn will recalculate,there are 2 ways to define return in TS
  const result = useMemo<number>(() => fib(myNum), [myNum]);
  // const result = useMemo(():number => fib(myNum), [myNum]);
  return (
    <div className="App">
      <h1>{count}</h1>
      <button onClick={addTwo}>Add</button>
      <h2>Result: {result}</h2>
      <input type="text" ref={inputRef} name="" id="" />
    </div>
  );
}

export default App;
