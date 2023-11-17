import React from "react";

const MenuBtn = () => {
  return (
    <div className="group flex flex-col gap-y-2 items-end cursor-pointer transition-all xl:hidden">
      <div className="w-7 h-[2px] bg-white"></div>
      <div className="w-4 group-hover:w-7 h-[2px] bg-white"></div>
      <div className="w-7 h-[2px] bg-white"></div>
    </div>
  );
};

export default MenuBtn;
