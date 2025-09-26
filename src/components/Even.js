import { useEffect } from "react";
const Even = () => {
  // 컴포넌트가 언마운트 되는 시점에서 실행되는 함수
  useEffect(() => {
    return () => {
      console.log("Even 컴포넌트 마운트 되었습니다.");
    };
    // useEffect 함수에서 return에 콜백함수 -> 클린업 함수가 됨
    // 클린업 함수 -> 언마운트 시점에서 호출
  }, []);
  return <div>현재 카운트는 짝수입니다.</div>;
};

export default Even;
