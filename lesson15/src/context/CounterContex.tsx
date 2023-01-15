import { ChangeEvent, createContext, useReducer, ReactNode, ReactElement, useCallback, Children, useContext } from "react";
type StateType = {
  count: number;
  text: string;
};
// 1. import state
export const initstate: StateType = { count: 0, text: "" };
// 2. import enum
const enum REDUCER_ACTION_TYPE {
  INCREMENT,
  DECREMENT,
  NEW_INPUT,
}
//3.
type ReducerAction = {
  type: REDUCER_ACTION_TYPE;
  payload?: string;
};

const reducer = (state: StateType, action: ReducerAction): StateType => {
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

// create  use context custome hook allow to use all state and context

const useCounterContext = (initstate: StateType) => {
  const [state, dispatch] = useReducer(reducer, initstate);
  const increment = useCallback(() => dispatch({ type: REDUCER_ACTION_TYPE.INCREMENT }), []);
  const decrement = useCallback(() => dispatch({ type: REDUCER_ACTION_TYPE.DECREMENT }), []);
  const handleTextInput = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: REDUCER_ACTION_TYPE.NEW_INPUT,
      payload: e.target.value,
    });
  }, []);
  return { state, increment, decrement, handleTextInput };
};
// once define type  useCounterContext we create type that return that useCounterContext
type UseCounterContextType = ReturnType<typeof useCounterContext>;
const initContextState: UseCounterContextType = {
  state: initstate,
  increment: () => {},
  decrement: () => {},
  handleTextInput: (e: ChangeEvent<HTMLInputElement>) => {},
};
// create context context
export const CounterContext = createContext<UseCounterContextType>(initContextState);
// require also type of children ?
type ChildrenType = {
  children?: ReactElement | undefined;
};
// create provider
export const CounterProvider = ({ children, ...initstate }: ChildrenType & StateType): ReactElement => {
  return <CounterContext.Provider value={useCounterContext(initstate)}>{children}</CounterContext.Provider>;
};
// set up own hook rather than children need to use 'useContext' to get 
type UseCounterHookType = {
  count: number;
  increment: () => void;
  decrement: () => void;
};
// create own hook
export const useCounter = (): UseCounterHookType => {
  const {
    state: { count },
    increment,
    decrement,
  } = useContext(CounterContext);
  return { count, increment, decrement };
};

// apply use context and export to children element

type UserCounterTextHookType = {
  text: string;
  handleTextInput: (e: ChangeEvent<HTMLInputElement>) => void;
};

export const useCounterText = (): UserCounterTextHookType => {
  const {
    state: { text },
    handleTextInput,
  } = useContext(CounterContext);
  return { text, handleTextInput };
};
