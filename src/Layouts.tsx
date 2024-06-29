import { Outlet } from "react-router-dom";
import { ScrollToTop } from "./utils/ScrollToTop";
import Header from "./components/Header";

export const Layout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <ScrollToTop />
    </>
  );
};
