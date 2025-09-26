import "./App.css";
import { useState } from "react";
import Viewer from "./components/Viewer";
import Controller from "./components/Controller";

function App() {
  // 자식 컴포넌트에게 props 전달을 위해 부모 컴포넌트 App에서 선언
  const [count, setCount] = useState(0);

  const onClickCount = (value) => {
    setCount(count + value);
  };

  return (
    <div className="App">
      <h1>Simple Counter</h1>
      <section>
        <Viewer count={count} />
      </section>
      <section>
        <Controller onClickCount={onClickCount} />
      </section>
    </div>
  );
}

export default App;
