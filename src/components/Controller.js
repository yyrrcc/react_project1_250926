const Controller = ({ handleSetCount }) => {
  return (
    <div>
      {/*
      onClick에는 '함수'를 넣어야 하고,
      onClick={handleSetCount(-1)}는 '함수 결과'를 넣는 거라서 렌더하는 순간 바로 실행됨
      onClick={() => handleSetCount(-1)}처럼 “함수를 하나 더 만들어 넘겨서, 클릭될 때 실행”되게 해야 함

      괄호가 붙으면 '지금 실행', 괄호가 없으면 '참조만 전달'
      이벤트 핸들러에는 항상 '참조'를 넣고, 인자가 필요하면 화살표 함수로 '나중에 실행'되게 감싸면 된다.
      */}
      <button onClick={() => handleSetCount(-1)}>-1</button>
      <button onClick={() => handleSetCount(-10)}>-10</button>
      <button onClick={() => handleSetCount(-100)}>-100</button>
      <button onClick={() => handleSetCount(+100)}>+100</button>
      <button onClick={() => handleSetCount(+10)}>+10</button>
      <button onClick={() => handleSetCount(+1)}>+1</button>
    </div>
  );
};

export default Controller;
