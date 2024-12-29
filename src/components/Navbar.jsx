import { Menu, X } from "lucide-react";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IKImage } from "imagekitio-react";
import Image from "./Image";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="w-full h-20 md:h-24 flex items-center justify-between border-b">
      <Link to="/" className="flex items-center gap-4 text-2xl  font-bold">
        <Image src="logo.png" alt="scrollnest logo" w={60} h={60} />
        <span className="hidden sm:inline">ScrollNest</span>
      </Link>
      {/* mobile */}
      <div className="md:hidden">
        <button
          onClick={() => setToggle(!toggle)}
          className="p-2"
          aria-label="Toggle menu"
        >
          {toggle ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

        {/* Mobile Menu Overlay */}
        {toggle && (
          <div className="fixed inset-0 bg-white z-50">
            <div className="flex flex-col h-full">
              {/* Header */}
              <div className="flex items-center justify-between p-4 border-b">
                <Link
                  to="/"
                  className="flex items-center gap-4 text-2xl font-bold"
                  onClick={() => setToggle(false)}
                >
                  <img
                    src="logo.png"
                    alt="Scroll Nest"
                    className="w-12 h-12 rounded-full"
                  />
                  <span>ScrollNest</span>
                </Link>
                <button
                  onClick={() => setToggle(false)}
                  className="p-2"
                  aria-label="Close menu"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Navigation Links */}
              <div className="flex flex-col p-4 gap-6 text-lg">
                <Link
                  to="/"
                  className="hover:text-blue-800 transition-colors"
                  onClick={() => setToggle(false)}
                >
                  Home
                </Link>
                <Link
                  to="/posts"
                  className="hover:text-blue-800 transition-colors"
                  onClick={() => setToggle(false)}
                >
                  Posts
                </Link>
                <Link
                  to="/about"
                  className="hover:text-blue-800 transition-colors"
                  onClick={() => setToggle(false)}
                >
                  About
                </Link>
                <Link
                  to="/signin"
                  className="py-2 px-4 rounded-full bg-blue-800 text-white text-center"
                  onClick={() => setToggle(false)}
                >
                  Signin
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
      {/* desktop */}
      <div className="hidden md:flex items-center gap-8 xl:gap-12 font-medium">
        <Link to="/">Home</Link>
        <Link to="/posts">Posts</Link>
        <Link to="/">About</Link>
        <Link
          to="/signin"
          className="py-2 px-4 rounded-full bg-blue-800 text-white"
        >
          Signin
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
