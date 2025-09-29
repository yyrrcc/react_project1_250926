import { useEffect } from "react";
const Even = () => {
  // useEffect 콜백은 본문에서 아무것도 하지 않음. 오직 return 값만 존재함.
  // 즉, cleanup 으로만 동작하게 만들어줌 (컴포넌트가 언마운트 되는 시점에서 실행되게 하기)
  useEffect(() => {
    return () => {
      // 마운트 직후 한 번 cleanup을 등록하고, 컴포넌트가 언마운트될 때 그 cleanup이 호출되어 로그를 남김
      console.log("Cleanup.. Even 컴포넌트 언마운트");
    };
  }, []);

  return <div>현재 카운트는 짝수입니다.</div>;
};

export default Even;
