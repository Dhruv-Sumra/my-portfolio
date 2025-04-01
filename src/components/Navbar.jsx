import React from "react";
import HamburgerMenu from "./HamburgerMenu";
import NavLinks from "./NavLinks";

const Navbar = (props) => {
  return (
    <div className="dark_bg component_size w-full z-20 h-15 shadow-lg flex justify-between items-center fixed">
      <div className="h-10 w-10 rounded-xl rotate-12 bg-green-200 shadow-xl">
        <h2 className="text-xl font-bold text-center -rotate-12 align-middle mt-1">
          DS
        </h2>
      </div>

      <HamburgerMenu />

      <div className="hidden md:flex">
        <NavLinks />
      </div>
    </div>
  );
};

export default Navbar;
