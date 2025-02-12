import { useState } from "react";
import "../index.css";
import HeaderMenu from "./HeaderMenu";
function Header({ windowTop, scrollToSection, checkActive }) {
  const [menuVisibility, setMenuVisibility] = useState(false);
  const toggleMenu = () => {
    setMenuVisibility((prev) => !prev);
  };
  const selectorLine = (
    <span className="animate-slide-up bottom-[-5px] right-1/2 transform -translate-x-[-50%] absolute w-3.75 h-0.75 rounded bg-black"></span>
  );
  return (
    <>
      <div
        className={`flex justify-between sidePadding h-18 items-center ${
          !windowTop
            ? "bg-white shadow-md fixed top-0 right-0 left-0 z-110"
            : "relative shadow-none bg-transparent"
        }`}
      >
        <img className="w-auto h-6" src="/assets/logo.png"></img>
        <div className="text-primary hidden md:flex text-l gap-x-5">
          <div
            className={`relative cursor-pointer ${
              checkActive("home") ? "font-bold" : ""
            }`}
          >
            <a onClick={() => scrollToSection("home")}>Home</a>

            {checkActive("home") ? selectorLine : ""}
          </div>
          <div
            className={` relative cursor-pointer ${
              checkActive("projects") ? "font-bold" : ""
            }`}
          >
            <a onClick={() => scrollToSection("projects")}>Projects</a>

            {checkActive("projects") ? selectorLine : ""}
          </div>
          <div
            className={`relative cursor-pointer ${
              checkActive("experience") ? "font-bold" : ""
            }`}
          >
            <a onClick={() => scrollToSection("experience")}>Experience</a>
            {checkActive("experience") ? selectorLine : ""}
          </div>
          <div
            className={`relative cursor-pointer ${
              checkActive("skills") ? "font-bold" : ""
            }`}
          >
            <a onClick={() => scrollToSection("skills")}>Skills</a>
            {checkActive("skills") ? selectorLine : ""}
          </div>
        </div>
        <div
         
          className="cursor-pointer inline md:hidden text-xl text-[#313131] hover:text-[#6F6F6F]"
        >
          <i  onClick={toggleMenu} className="fa-solid fa-bars"></i>
        </div>
      </div>
      {menuVisibility && <HeaderMenu toggleVisibility={toggleMenu} scrollToSection={scrollToSection}/>}
    </>
  );
}
export default Header;
