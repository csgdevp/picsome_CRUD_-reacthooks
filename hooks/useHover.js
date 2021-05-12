import { useState, useEffect, useRef } from "react";

function useHover() {
  const [hovered, setHovered] = useState(false);
  const ref = useRef(null);
  function enter() {
    setHovered(true);
  }

  function leave() {
    setHovered(false);
  }

  useEffect(() => {
    const myRef = ref.current;
    myRef.addEventListener("mouseenter", enter);
    myRef.addEventListener("mouseleave", leave);

    return () => {
      myRef.removeEventListener("mouseenter", enter);
      myRef.removeEventListener("mouseleave", leave);
    };
  }, []);
  return [hovered, ref];
}

export default useHover;
