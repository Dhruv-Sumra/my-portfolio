import React, { useState } from "react";
import Hamburger from "hamburger-react";
import NavLinks from "./NavLinks";

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div>
      <div className="">
        <div className="md:hidden">
          <Hamburger size={25} onToggle={handleMenu} />
        </div>
      </div>

      <div
        className={`${
          isOpen ? "translate-x-0" : "translate-x-full"
        } absolute top-15 right-0 text-md md:hidden text-lg font-semibold light_bg space-y-2 px-6 rounded-l-sm py-2 transition-transform duration-300 ease-in-out shadow-xl`}
      >
        <NavLinks/>
      </div>
    </div>
  );
};

export default HamburgerMenu;
