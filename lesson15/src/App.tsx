import { CounterProvider, initstate } from "./context/CounterContex";
import { Counter } from "./Counter";
function App() {
  return (
    <>
      <CounterProvider count={initstate.count} text={initstate.text}>
        <Counter children={(num: number) => <>counter : {num}</>} />
      </CounterProvider>
    </>
  );
}

export default App;
