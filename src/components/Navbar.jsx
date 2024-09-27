import React, { useState } from "react";
import Button from "./Button";
import { motion } from "framer-motion";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false); // State to toggle mobile menu

  const logoUrl =
    "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/63349803431f1562dccf1802_refokus%20logo.svg";
  const navLink = ["home", "work", "culture", "", "news"];

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="max-w-screen-xl mx-auto py-6 px-16 flex items-center justify-between border-b-[1px] border-zinc-700">
      <div className="nleft flex items-center">
        <img
          src={logoUrl}
          alt="refokus-logo"
          className="h-8 w-auto" // Responsive logo size
        />
        {/* Desktop Navigation Links */}
        <div className="hidden lg:flex gap-8 ml-10">
          {navLink.map((elem, index) => (
            <a
              key={index}
              href="#"
              className="font-regular text-md capitalize flex items-center gap-1 cursor-pointer"
            >
              {index === 1 && (
                <span
                  style={{
                    boxShadow: "0 0 0.25em #00FF19",
                  }}
                  className="inline-block w-1.5 h-1.5 rounded-full bg-green-400"
                ></span>
              )}
              {elem.length === 0 ? (
                <span className="w-[2px] h-7 bg-zinc-600"></span>
              ) : (
                elem
              )}
            </a>
          ))}
        </div>
      </div>
      <Button paddingX="px-2" paddingY="py-2"/>

      {/* Mobile Menu Toggle (Burger Icon) */}
      <div className="lg:hidden">
        <motion.button  onClick={toggleMenu} className="text-white focus:outline-none">
          <motion.svg
        
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </motion.svg>
        </motion.button>
      </div>

      {/* Slide-In Mobile Menu */}
      <div
        className={`${

          isOpen ? "translate-x-0" : "-translate-x-full"
        } fixed top-0 left-0 w-64 h-full bg-zinc-900 text-white transition-transform transform lg:hidden z-50`}
      >
        <div className="flex items-center justify-between p-5 border-b border-zinc-700">
          <img src={logoUrl} alt="refokus-logo" className="h-8 w-auto" />
          <motion.button
           whileTap={{x:"2%",y:'-2%'}}
           animate={{x:"0%"}} 
            onClick={toggleMenu}
            className="text-white focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          </motion.button>
        </div>
        <div className="p-5 flex flex-col gap-4">
          {navLink.map((elem, index) => (
            <a
              key={index}
              href="#"
              onClick={toggleMenu} // Close menu on link click
              className="font-regular text-lg capitalize flex items-center gap-2 cursor-pointer"
            >
              {index === 1 && (
                <span
                  style={{
                    boxShadow: "0 0 0.25em #00FF19",
                  }}
                  className="inline-block w-1.5 h-1.5 rounded-full bg-green-400"
                ></span>
              )}
              {elem.length === 0 ? (
                <span className=" bg-zinc-600"></span>
              ) : (
                elem
              )}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
