import { NavContext } from "@/context/NavContext";
import React, { useContext } from "react";

const NavMobile = () => {
  const { isOpen, setIsOpen } = useContext(NavContext);

  return (
    <nav
      className={`
      ${isOpen ? "right-0" : "-right-full"}
         xl:hidden fixed bg-red-500 w-full top-0 z-20 bottom-0 transition-all
         duration-500`}
    >
      NavMobile
    </nav>
  );
};

export default NavMobile;
