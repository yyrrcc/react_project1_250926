import "./App.css";
import { useState, useEffect, useRef } from "react";
import Viewer from "./components/Viewer";
import Controller from "./components/Controller";
import Even from "./components/Even";

function App() {
  // 자식 컴포넌트에게 props 전달을 위해 부모 컴포넌트 App에서 선언
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");

  const onClickCount = (value) => {
    setCount(count + value);
  };

  const handleChangeText = (e) => {
    setText(e.target.value);
  };

  // didMountRef : 처음 한 번은 건너뛰고 이후 업데이트 때만 코드가 돌게 하려는 플래그
  const didMountRef = useRef(false);
  // 함수 useEffect : 어떤 값이 변경될 때마다 특정 코드를 실행하는 리액트 훅
  // 랜더링 후에 발생하는 부작용을 처리하는 함수로 랜더링 후에 무조건 실행되는 함수임
  // useEffect(callback 콜백 함수, [deps] 의존성 배열)
  useEffect(() => {
    if (!didMountRef.current) {
      didMountRef.current = true;
      return;
    } else {
      console.log("컴포넌트 업데이트!");
    }
  });

  // 컴포넌트의 마운트 시점에 실행되는 코드
  // useEffect에서 빈 배열을 전달하면 컴포넌트의 마운트 시점에만 콜백 함수를 실행
  useEffect(() => {
    console.log("컴포넌트 마운트");
  }, []);

  // 1초마다 콘솔에 문자열 출력
  // useEffect(() => {
  //   setInterval(() => {
  //     console.log("깜빡");
  //   }, 50000);
  // });

  // 클린업
  useEffect(() => {
    const intervalID = setInterval(() => {
      console.log("깜빡");
    }, 1000);
    return () => {
      console.log("클린업");
      clearInterval(intervalID);
    };
  });

  return (
    <div className="App">
      <h1>Simple Counter</h1>
      <section>
        <input value={text} onChange={handleChangeText} />
      </section>
      <section>
        <Viewer count={count} />
        {count % 2 === 0 && <Even />}
      </section>
      <section>
        <Controller onClickCount={onClickCount} />
      </section>
    </div>
  );
}

export default App;
