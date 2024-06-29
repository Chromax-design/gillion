import { Link, useLocation } from "react-router-dom";
import logo from "/assets/logo.png";
import { cn } from "@/lib/utils";
import Sidebar from "./Sidebar";

const navLinks = [
  {
    id: 1,
    title: "home",
    link: "/",
  },
  {
    id: 2,
    title: "about",
    link: "/about",
  },
  {
    id: 3,
    title: "contact",
    link: "/contact",
  },
];

const Header = () => {
  const { pathname } = useLocation();
  return (
    <header className="pt-3 px-3">
      <nav className=" max-w-6xl mx-auto flex justify-between items-center py-5">
        <img src={logo} alt="logo" />
        <div className="hidden sm:flex gap-8">
          {navLinks.map((item) => {
            const isActive =
              pathname == item.link && pathname.startsWith(`${item.link}`);
            return (
              <Link
                to={`${item.link}`}
                key={item.id}
                className={cn(
                  `uppercase font-semibold relative text-sm text-gray-500 hover:text-gray-950`,
                  { "font-bold text-gray-950": isActive }
                )}
              >
                {item.title}
              </Link>
            );
          })}
        </div>
        <Sidebar />
      </nav>
    </header>
  );
};

export default Header;
