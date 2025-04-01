import React from 'react'
import { NavLink } from "react-router-dom";

const NavLinks = () => {
  return (
    <div className=' text-base space-y-1 flex flex-col lg:text-lg md:flex-row md:space-x-10 md:text-amber-800'>
        <NavLink to={"/"} className={({ isActive }) =>
          `border_bottom ${isActive ? "text-amber-900 font-semibold " : "hover:text-amber-900"}`
        }
>
          Home
        </NavLink>
        <NavLink to={"projects"} className={({ isActive }) =>
          `border_bottom ${isActive ? "text-amber-900 font-semibold" : "hover:text-amber-900"}`
        }>
          Projects
        </NavLink>
        <NavLink to={"contact"} className={({ isActive }) =>
          `border_bottom ${isActive ? "text-amber-900 font-semibold " : "hover:text-amber-900"}`
        }>
          Contact
        </NavLink>
    </div>
  )
}

export default NavLinks