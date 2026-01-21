"use client";
import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-black sticky top-0 z-50 shadow-md">
      <div className="flex justify-between items-center w-full px-5">
        <div id="left">
          <a
            href="#top"
            className="inline-block font-bold text-md text-white px-5 transition duration-400 hover:scale-110 origin-left"
          >
            Marc Xavier Pragata
          </a>
        </div>

        <div id="right">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white p-5 md:hidden z-50 relative"
          >
            {isOpen ? (
              <XMarkIcon className="h-6 w-6" />
            ) : (
              <Bars3Icon className="h-6 w-6" />
            )}
          </button>
          <ul
            className={`
            flex flex-col absolute left-0 w-full text-white bg-black transition-all duration-300 ease-in-out
            ${
              isOpen
                ? "top-full opacity-100 visible"
                : "top-[-200%] opacity-0 invisible md:visible"
            } 
            md:flex-row md:static md:w-auto md:gap-6 md:opacity-100 md:top-auto
          `}
          >
            {["About", "Experience", "Projects", "Skills", "Contact"].map(
              (item) => (
                <li
                  key={item}
                  className="transition duration-500 text-white font-bold hover:bg-white hover:text-black border-b border-gray-800 md:border-none"
                >
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="block p-5"
                    onClick={() => setIsOpen(false)}
                  >
                    {item}
                  </a>
                </li>
              ),
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}
