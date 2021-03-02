import { useState, useEffect } from "react";
import { throttle } from "lodash";
import resolveConfig from "tailwindcss/resolveConfig";

import tailwindConfig from "../../tailwind.config.js";

export function useIsMobile() {
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
  const twConfig = resolveConfig(tailwindConfig);
  return screenWidth < parseInt(twConfig.theme.screens.md);
}

export default useIsMobile;
