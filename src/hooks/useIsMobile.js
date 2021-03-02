import { useState, useEffect } from "react";
import { throttle } from "lodash";

export function useIsMobile() {
  if (typeof window === "undefined") {
    return;
  }

  const [isMobile, setIsMobile] = useState(getIsMobile(window.innerWidth));

  useEffect(() => {
    const calcInnerWidth = throttle(() => {
      setIsMobile(getIsMobile(window.innerWidth));
    }, 200);
    window.addEventListener("resize", calcInnerWidth);
    return () => window.removeEventListener("resize", calcInnerWidth);
  }, []);

  return isMobile;
}

function getIsMobile(screenWidth) {
  return screenWidth < 768;
}

export default useIsMobile;
