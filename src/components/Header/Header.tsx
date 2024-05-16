import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom"; // Assuming you're using React Router

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 0) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener on unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav
      className={`   ${
        isSticky ? "bg-white shadow-md sticky top-0 z-10" : "bg-indigo-100"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16 items-center">
          <div>
            <Link to="/" className="text-slate-900 text-lg font-bold">
              Your Logo
            </Link>
          </div>
          <div className="hidden sm:flex sm:ml-auto">
            <div className="flex space-x-4">
              <Link
                to="/"
                className="hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium"
                onClick={closeMenu} // Close menu when Home link is clicked
              >
                Home
              </Link>
              <Link
                to="/find-job"
                className="hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium"
                onClick={closeMenu} // Close menu when Find Job link is clicked
              >
                Find Job
              </Link>
              <Link
                to="/blogs"
                className="hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium"
                onClick={closeMenu} // Close menu when Blogs link is clicked
              >
                Blogs
              </Link>
            </div>
          </div>
          <div className="flex items-center sm:hidden">
            <button
              onClick={toggleMenu}
              className="p-2 text-gray-400 hover:text-white focus:outline-none"
            >
              <svg
                className={`${isOpen ? "hidden" : "block"} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              <svg
                className={`${isOpen ? "block" : "hidden"} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div
        className={`sm:hidden ${
          isOpen ? "menu-visible" : "menu-hidden"
        } menu-drawer `}
        onClick={closeMenu}
      >
        <div className="px-2 pt-2 pb-3 space-y-1">
          <Link
            to="/"
            className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-gray-700"
            onClick={closeMenu} // Close menu when Home link is clicked
          >
            Home
          </Link>
          <Link
            to="/find-job"
            className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-gray-700"
            onClick={closeMenu} // Close menu when Find Job link is clicked
          >
            Find Job
          </Link>
          <Link
            to="/blogs"
            className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-gray-700"
            onClick={closeMenu} // Close menu when Blogs link is clicked
          >
            Blogs
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
