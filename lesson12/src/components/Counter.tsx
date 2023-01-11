import React, { ReactNode, useState } from "react";
type CounterProp = {
  setCount: React.Dispatch<React.SetStateAction<number>>;
  children: ReactNode;
};
export const Counter = ({ setCount, children }: CounterProp) => {
  return (
    <div>
      <h1> count is: {children}</h1>
      <button
        onClick={() => {
          setCount((prev) => prev - 1);
        }}
      >
        -
      </button>
      <button
        onClick={() => {
          setCount((prev) => prev + 1);
        }}
      >
        +
      </button>
    </div>
  );
};
