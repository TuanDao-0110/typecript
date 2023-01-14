import React, { ChangeEvent, ReactNode, useReducer } from "react";
type ChildrenType = {
  children: (num: number) => ReactNode;
};
type InitstateType = {
  count: number;
  text: string | undefined;
};
const initstate = { count: 0, text: "" };
const enum REDUCER_ACTION_TYPE {
  INCREMENT,
  DECREMENT,
  NEW_INPUT,
}

type ReducerAction = {
  type: REDUCER_ACTION_TYPE;
  payload?: string;
};

const reducer = (state: typeof initstate, action: ReducerAction): typeof initstate => {
  switch (action.type) {
    case REDUCER_ACTION_TYPE.INCREMENT:
      return { ...state, count: state.count + 1 };
    case REDUCER_ACTION_TYPE.DECREMENT:
      return { ...state, count: state.count - 1 };
    case REDUCER_ACTION_TYPE.NEW_INPUT:
      // because payload is out optional that why payload my not display
      // so to make sure without payload our code will not send undefined to text so we use '??'
      //   or we can use InitstateType to defined that my count can be undefine ...
      return { ...state, text: action.payload ?? "" };
    default:
      throw new Error();
  }
};
export const Counter = ({ children }: ChildrenType) => {
  //   const [count, setCount] = useState<number>(1);
  const [state, dispatch] = useReducer(reducer, initstate);
  const increment = () => dispatch({ type: REDUCER_ACTION_TYPE.INCREMENT });
  const decrement = () => dispatch({ type: REDUCER_ACTION_TYPE.DECREMENT });
  const handleTextInput = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: REDUCER_ACTION_TYPE.NEW_INPUT,
      payload: e.target.value,
    });
  };
  return (
    <>
      <h1>{children(state.count)}</h1>
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
      <p>this is text: {state.text}</p>
    </>
  );
};
