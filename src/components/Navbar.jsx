import { Menu, X } from "lucide-react";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { navbarData } from "./NavbarData";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="bg-white shadow-lg fixed w-full top-0 left-0 z-50">
      <div className="w-max-7xl mx-auto px-4 sm:px-6 lg:px-8 container">
        <div className="flex justify-between items-center h-20">
          <div>
            <Link
              to="/"
              className="flex items-center gap-2 text-xl md:text-2xl font-bold"
            >
              <img
                src="logo.png"
                alt="Scroll Nest"
                className="w-12 h-12 md:w-20 md:h-20 rounded-full"
              />
              <span className="hidden sm:inline">ScrollNest</span>
            </Link>
          </div>
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8 font-medium">
            {navbarData.map((link, index) => (
              <Link
                key={index}
                to={link.href}
                className="text-gray-600 hover:text-indigo-600 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300"
              >
                {link.title}
              </Link>
            ))}
          </div>

          {/* Toggle Button for Mobile */}
          <div className="md:hidden flex items-center">
            <button
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-indigo-600 focus:outline-none transition-colors duration-300"
              onClick={() => setToggle(!toggle)}
              aria-label={toggle ? "Close menu" : "Open menu"}
            >
              {toggle ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>

          {/* Mobile Menu */}
          <div
            className={`md:hidden transition-all duration-300 ease-in-out ${
              toggle ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
            } overflow-hidden`}
          >
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white">
              {navbarData.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="block text-gray-600 hover:text-indigo-600 hover:bg-gray-50 px-3 py-2 rounded-md text-base font-medium transition-colors duration-300"
                >
                  {item.title}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
