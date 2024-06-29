import { useEffect, useState } from "react";

export const UseIsMobile = () => {
  const [isMobile, setIsMobile] = useState<boolean>(window.innerWidth < 768);
  const handleResize = () => {
    setIsMobile(window.innerWidth < 768);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return isMobile;
};
