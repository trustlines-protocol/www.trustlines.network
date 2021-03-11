import { useState, useEffect } from "react";
import { throttle } from "lodash";

const devices = {
  tablet: 768,
  mobile: 620,
};

export function useIsDevice(device) {
  const deviceWidth = devices[device];

  if (!deviceWidth) {
    throw new Error("unsupported device");
  }

  if (typeof window === "undefined") {
    return;
  }

  const [isMobile, setIsMobile] = useState(
    getIsMobile(window.innerWidth, deviceWidth)
  );

  useEffect(() => {
    const calcInnerWidth = throttle(() => {
      setIsMobile(getIsMobile(window.innerWidth, deviceWidth));
    }, 200);
    window.addEventListener("resize", calcInnerWidth);
    return () => window.removeEventListener("resize", calcInnerWidth);
  }, []);

  return isMobile;
}

function getIsMobile(screenWidth, deviceWidth) {
  return screenWidth < deviceWidth;
}

export default useIsDevice;
