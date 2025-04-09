import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const { cart } = useSelector((state) => state);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0">
            <NavLink to="/" className="text-2xl font-bold text-gray-900">
              ShopElite
            </NavLink>
          </div>

          {/* Nav Links */}
          <div className="hidden md:flex space-x-8">
            <NavLink
              to="/"
              className="text-gray-700 hover:text-black transition"
            >
              Home
            </NavLink>
            <NavLink
              to="/shop"
              className="text-gray-700 hover:text-black transition"
            >
              Shop
            </NavLink>
            <NavLink
              to="/about"
              className="text-gray-700 hover:text-black transition"
            >
              About
            </NavLink>
            <NavLink
              to="/contact"
              className="text-gray-700 hover:text-black transition"
            >
              Contact
            </NavLink>
          </div>

          {/* Icons */}
          <div className="flex items-center space-x-4">
            {/* Search */}
            <button aria-label="Search">
              <svg
                className="h-6 w-6 text-gray-700 hover:text-black"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-4.35-4.35m1.85-5.15a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>

            {/* User Account */}
            <NavLink to="/account" aria-label="Account">
              <svg
                className="h-6 w-6 text-gray-700 hover:text-black"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5.121 17.804A4 4 0 018 16h8a4 4 0 012.879 1.804M12 14a4 4 0 100-8 4 4 0 000 8z"
                />
              </svg>
            </NavLink>

            {/* Cart */}
            <NavLink to="/cart" className="relative" aria-label="Cart">
              <svg
                className="h-6 w-6 text-gray-700 hover:text-black"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13l-1.5 6h11l-1.5-6M7 13h10"
                />
              </svg>
              {cart.length > 0 && (
                <span className="absolute -top-1 -right-2 bg-red-500 text-white text-xs w-4 h-4 rounded-full flex items-center justify-center animate-bounce">{cart.length}</span>
              )}
            </NavLink>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button aria-label="Open Menu">
                <svg
                  className="h-6 w-6 text-gray-700"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
