import React, { useState, useEffect } from "react";
import { HEADER_LINKS } from "../static";
import { CiLight } from "react-icons/ci";
import { MdDarkMode } from "react-icons/md";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import SignIn from "./SignIn";
import Modal from "./Modal";
import SignUp from "./SignUp";

const Header = () => {
  const [dark, setDark] = useState(false); 
  const [signIn, setSignIn] = useState(false);
  const [signUp, setSignUp] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleActions = () => {
    setSignIn((p) => !p);
    setSignUp((p) => !p);
  };

  const darkMode = () => {
    document.body.classList.toggle("dark");
    setDark(!dark);
  };

  useEffect(() => {
    if (dark) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }

    const handleResize = () => {
      if (window.innerWidth > 1024) {
        setMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [dark]);

  const header_links = HEADER_LINKS.map((item, inx) => (
    <li
      key={inx}
      className="item hover:text-violet-800 transition duration-300 max-lg:hidden"
    >
      <a
        href="#"
        className="hover:underline font-medium text-lg px-3 py-1 rounded-md hover:bg-gray-100 transition duration-300"
      >
        {item.name}
      </a>
    </li>
  ));

  const mobileMenuLinks = HEADER_LINKS.map((item, inx) => (
    <li
      key={inx}
      className="item text-center hover:text-violet-500 transition duration-300 py-2"
    >
      <a
        href="#"
        className="font-medium text-lg px-3 py-1 hover:bg-gray-100 transition duration-300"
      >
        {item.name}
      </a>
    </li>
  ));

  return (
    <>
      <div className="h-20">
        {signIn && (
          <Modal close={() => setSignIn(false)}>
            <SignIn toggle={toggleActions} close={() => setSignIn(false)} />
          </Modal>
        )}
        {signUp && (
          <Modal close={() => setSignUp(false)}>
            <SignUp toggle={toggleActions} close={() => setSignUp(false)} />
          </Modal>
        )}

        <div className="fixed header h-20 w-full bg-gradient-to-r bg-violet-700 text-white shadow-md dark:bg-slate-800">
          <div className="container h-full flex items-center justify-between px-6">
            <a href="https://www.youtube.com">
              <img
                className="w-[60px] rounded-lg shadow-lg"
                src="data:image/jpeg;base64,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"
                alt="logo"
              />
            </a>

            <ul className="hidden md:flex gap-5 items-center">
              {header_links}
              <li>
                <button
                  onClick={() => setSignIn(true)}
                  className="rounded-full bg-white text-yellow-700 font-semibold py-2 px-6 hover:bg-indigo-800 hover:text-white transition-all duration-300 shadow-md"
                >
                  Sign In
                </button>
              </li>
              <li>
                <button
                  onClick={() => setSignUp(true)}
                  className="rounded-full bg-white text-yellow-700 font-semibold py-2 px-6 hover:bg-indigo-800 hover:text-white transition-all duration-300 shadow-md"
                >
                  Sign Up
                </button>
              </li>
              <li>
                {dark ? (
                  <button
                    onClick={darkMode}
                    className="rounded-full bg-white text-black p-3 hover:bg-blue-500 shadow-lg transition duration-300 hover:text-yellow-400"
                  >
                    <MdDarkMode size={20} />
                  </button>
                ) : (
                  <button
                    onClick={darkMode}
                    className="rounded-full bg-gray-800 text-white p-3 hover:bg-gray-700 shadow-lg transition duration-300"
                  >
                    <CiLight size={20} className="font-bold" />
                  </button>
                )}
              </li>
            </ul>

            <button
              onClick={() => setMenuOpen((prev) => !prev)}
              className="text-white md:hidden"
            >
              {menuOpen ? (
                <AiOutlineClose size={25} />
              ) : (
                <AiOutlineMenu size={25} />
              )}
            </button>
          </div>
        </div>

        {menuOpen && (
          <div className="absolute top-20 right-0 w-full bg-white shadow-lg dark:bg-slate-800 md:hidden">
            <ul className="flex flex-col items-center py-4 gap-3 text-gray-700 dark:text-gray-200">
              {mobileMenuLinks}
              <li>
                <button
                  onClick={() => setSignIn(true)}
                  className="w-full text-center py-2 px-3 bg-blue-600 text-white font-semibold rounded-md shadow-md"
                >
                  Sign In
                </button>
              </li>
              <li>
                <button
                  onClick={() => setSignUp(true)}
                  className="w-full text-center py-2 px-3 bg-blue-600 text-white font-semibold rounded-md shadow-md"
                >
                  Sign Up
                </button>
              </li>
            </ul>
          </div>
        )}
      </div>
    </>
  );
};

export default Header;
