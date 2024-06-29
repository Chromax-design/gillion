import { useEffect, useState } from "react";

export const UseIsSticky = () => {
  const [isSticky, setIsSticky] = useState<boolean>(false);

  const handleSticky = () => {
    setIsSticky(window.scrollY > 150);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleSticky);

    return () => {
      window.removeEventListener("scroll", handleSticky);
    };
  }, []);

  return isSticky;
};
