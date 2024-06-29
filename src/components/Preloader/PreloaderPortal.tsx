import { createPortal } from "react-dom";
import { Preloader } from "./Preloader";

export const PreloaderPortal = () => {
  return createPortal(
    <Preloader />,
    document.getElementById("preloader-root") as HTMLElement
  );
};
