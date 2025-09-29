import "./App.css";
import { useState, useEffect, useRef } from "react";
import Viewer from "./components/Viewer";
import Controller from "./components/Controller";
import Even from "./components/Even";

function App() {
  // 0. 자식 컴포넌트에게 props 전달을 위해 부모 컴포넌트 App에서 선언
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");

  const handleSetCount = (value) => {
    setCount(count + value);
  };

  const handleChangeText = (e) => {
    setText(e.target.value);
  };

  // 3. didMountRef : 처음 한 번은 건너뛰고 이후 업데이트 때만 코드가 돌게 하려는 플래그
  const didMountRef = useRef(false);

  // 1. 함수 useEffect : 어떤 값이 변경될 때마다 특정 코드를 실행하는 리액트 훅
  // 랜더링 후에 발생하는 부작용을 처리하는 함수로 랜더링 후에 무조건 실행되는 함수임
  // useEffect(callback 콜백 함수, [deps] 의존성 배열)
  useEffect(() => {
    // 3. 현재 didMountRef.current의 기본값 false -> !didMountRef.current = true -> if문 실행
    // -> didMountRef.current = true로 바뀌고 그 다음부터는 else 블록만 실행되게 해주는 패턴
    if (!didMountRef.current) {
      didMountRef.current = true;
      return;
    } else {
      console.log("컴포넌트 업데이트!");
    }
  });

  // 2. 마운트 될 때마다 + count,  text 변화 있을 때 실행됨
  // useEffect(() => {
  //   console.log("마운트 됨! + 업데이트 : ", text, count);
  // }, [count, text]);

  // 2. 의존성 배열을 빈 배열로 전달하면 최초로 마운트 될 때만 1번만 실행됨
  useEffect(() => {
    console.log("컴포넌트 최초 마운트");
  }, []);

  // 2. setInterval 함수 이용해서 1초마다 콘솔에 문자열 출력
  // useEffect(() => {
  //   setInterval(() => {
  //     console.log("깜빡");
  //   }, 1000);
  // });

  // 4. useEffect의 콜백 함수가 반환하는 함수를 클린업 함수. 콜백 함수를 다시 호출하기 전에 실행
  // 따라서 컴포넌트를 렌더링할 때 마다 새 인터벌을 생성하고 기존 인터벌은 삭제
  useEffect(() => {
    const intervalID = setInterval(() => {
      console.log("깜빡!");
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
        <Controller handleSetCount={handleSetCount} />
      </section>
    </div>
  );
}

export default App;
