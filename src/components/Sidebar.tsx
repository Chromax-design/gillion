import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { navLinks } from "@/constants";
import { cn } from "@/lib/utils";
import { FaBars } from "react-icons/fa6";
import { Link, useLocation } from "react-router-dom";

const Sidebar = () => {
  const { pathname } = useLocation();
  return (
    <div className="sm:hidden">
      <Sheet>
        <SheetTrigger asChild>
          <Button variant={'outline'}>
          <FaBars className="text-xl cursor-pointer" />
          </Button>
        </SheetTrigger>
        <SheetContent>
          <div className="h-full flex flex-col gap-10 pt-10">
            {navLinks.map((item) => {
              const isActive =
                pathname == item.link && pathname.startsWith(`${item.link}`);
              return (
                <SheetClose asChild>
                  <Link
                    to={`${item.link}`}
                    key={item.id}
                    className={cn(
                      `uppercase font-semibold relative text-xl text-gray-500 hover:text-gray-950`,
                      { "font-bold text-gray-950 tracking-wider": isActive }
                    )}
                  >
                    {item.title}
                  </Link>
                </SheetClose>
              );
            })}
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default Sidebar;
