import { ReactNode } from "react";
import { useCounter, useCounterText } from "./context/CounterContex";
type ChildrenType = {
  children: (num: number) => ReactNode;
};

export const Counter = ({ children }: ChildrenType) => {
  const { count, increment, decrement } = useCounter();
  const { text, handleTextInput } = useCounterText();

  return (
    <>
      <h1>{children(count)}</h1>
      <div>
        <button
          onClick={() => {
            increment();
          }}
        >
          +
        </button>
        <button
          onClick={() => {
            decrement();
          }}
        >
          -
        </button>
      </div>
      <input type="text" onChange={handleTextInput} />
      <p>this is text: {text}</p>
    </>
  );
};
