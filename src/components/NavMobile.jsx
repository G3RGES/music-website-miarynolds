import { NavContext } from "@/context/NavContext";
import React, { useContext } from "react";

// icons
import { RiCloseLine } from "react-icons/ri";

// components
import Nav from "./Nav";

const NavMobile = () => {
  const { isOpen, setIsOpen } = useContext(NavContext);

  return (
    <nav
      className={`
      ${isOpen ? "right-0" : "-right-full"}
         xl:hidden fixed bg-primary w-full top-0 z-20 bottom-0 transition-all
         duration-500`}
    >
      <div className="absolute right-4 top-5">
        <RiCloseLine
          onClick={() => setIsOpen(false)}
          className="text-5xl cursor-pointer"
        />
      </div>
      <Nav
        containerStyles="flex flex-col items-center justify-center
       gap-y-8 text-3xl uppercase font-bold h-full"
      />
    </nav>
  );
};

export default NavMobile;
