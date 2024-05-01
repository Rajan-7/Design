import { useState } from "react";
import { close, logo, menu } from "../assets";

import { navLinks } from "../constants";
const NavBar = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <nav className="flex w-full justify-between items-center py-6 navbar">
      <img src={logo} alt="bank" className="w-[124px] h-[32px]" />
      <ul className="sm:flex hidden list-none justify-end items-center flex-1">
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-poppins font-normal text-[16px] text-white ${
              index === navLinks.length - 1 ? "mr-0" : "mr-10"
            }`}
          >
            <a href={`#${nav.id}`}>{nav.title}</a>
          </li>
        ))}
      </ul>

      <div className="sm:hidden flex flex-1 justify-end items-center">
        <img
          src={toggle ? close : menu}
          alt="menu"
          className="h-[28px] w-[28px] object-contain"
          onClick={() => setToggle((prev) => !prev)}
        />
        <div
          className={`${
            toggle ? "flex" : "hidden"
          } absolute top-20 right-0 mx-4 my-2 min-w-[140px] bg-black-gradient p-6 rounded-xl sidebar`}
        >
          <ul className="flex flex-col list-none justify-end items-center flex-1">
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`font-poppins font-normal text-[16px] text-white ${
                  index === navLinks.length - 1 ? "mb-0" : "mb-4"
                }`}
              >
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
