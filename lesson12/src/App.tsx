import { useState } from "react";
import { Counter } from "./components/Counter";
import Heading from "./components/Heading";
import List from "./components/List";
import Section from "./components/Section";
function App() {
  const [count, setCount] = useState<number>(1);

  return (
    <div>
      <Heading title="hello" />
      <Section >children</Section>
      <Counter children={count} setCount={setCount}></Counter>
      <List items={["hello", "new"]} render={(item: string) => <span> {item}</span>} />
    </div>
  );
}

export default App;
