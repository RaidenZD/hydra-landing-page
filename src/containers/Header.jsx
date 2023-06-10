import { useState } from "react";
import { logo, hydra, hamburger } from "../assets";
import Button from "../components/Button";
import { navLinks } from "../utils/constants";

const Header = () => {
  const [isHamburgerClicked, setIsHamburgerClicked] = useState(false);

  const showMobileMenu = () => {
    setIsHamburgerClicked((prevState) => {
      return !prevState;
    });
  };

  return (
    <header className=" flex items-center justify-between relative">
      {/* Logo */}
      <div className=" flex gap-4 items-center cursor-pointer">
        <img
          className=" w-[70px] h-[60px] md:w-auto md:h-auto"
          src={logo}
          alt="hydra logo"
        />
        <img
          className=" w-[46px] h-7 md:w-auto md:h-auto"
          src={hydra}
          alt="hydra text"
        />
      </div>

      {/* Navigation */}
      <nav className=" hidden lg:block">
        <ul className=" flex gap-10 text-white cursor-pointer text-xs font-[700]">
          {navLinks.map((navItem) => (
            <li key={navItem.id}>
              <a href={navItem.path}>{navItem.title}</a>
            </li>
          ))}
        </ul>
      </nav>

      {/* Buttons */}
      <div className=" hidden lg:flex gap-8 font-bold text-xs">
        <button
          className=" uppercase border-2 rounded-3xl px-8 py-3  text-white"
          type="button"
        >
          Contact us
        </button>

        <Button text="Join Hydra" type="button" />
      </div>

      {/* Mobile version */}
      <img
        onClick={showMobileMenu}
        className=" lg:hidden"
        src={hamburger}
        alt="hamburger button"
      />

      {isHamburgerClicked && (
        <nav className=" lg:hidden fixed top-20 right-3">
          <ul className=" flex flex-col gap-3 self-start text-darkPurple z-50 bg-gradient-to-r from-[#8176AF] to-[#C0B7E8] rounded-md p-5 cursor-pointer text-xs font-[700]">
            {navLinks.map((navItem) => (
              <li key={navItem.id}>{navItem.title}</li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
};
export default Header;
