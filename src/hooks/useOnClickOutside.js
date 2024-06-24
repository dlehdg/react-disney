import { useEffect } from "react"

export default function useOnClickOutside(ref, handler) {
  // ref는 안을 눌렀는지 밖을 눌렀는지 구분, handler는 모델을 닫아주기 위해 사용
  useEffect(() => {
    const listener = (event) => {
      if(!ref.current || ref.current.contains(event.target)){ 
        return;
      }
      handler();
    };
    document.addEventListener("mousedown", listener);
    document.addEventListener("torchstart", listener);
  
    return () => {
      // 컴포넌트가 더 이상 사용하지 않을 때 기존 이벤트를 삭제
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("torchstart", listener);
    }
  }, [ref, handler]) // ref or handler이 바뀌면 렌더링
  
}