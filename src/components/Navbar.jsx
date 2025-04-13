import React, { useState } from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import Search from "./Search";

const Navbar = () => {
  const { cart } = useSelector((state) => state);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showSearch, setShowSearch] = useState(false);

  
  const handleLinkClick = () => {
    setIsMobileMenuOpen(false);  // Close menu after clicking a link
  };

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0">
            <NavLink to="/" onClick={handleLinkClick} className="text-2xl font-bold text-gray-900">
              ShopElite
            </NavLink>
          </div>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex space-x-8">
            {["/", "/shop", "/about", "/contact"].map((path, index) => (
              <NavLink
                key={index}
                to={path}
                onClick={handleLinkClick}
                className="text-gray-700 hover:text-black transition px-2 py-1 rounded-md hover:bg-gray-100"
              >
                {path === "/" ? "Home" : path.replace("/", "").charAt(0).toUpperCase() + path.slice(2)}
              </NavLink>
            ))}
          </div>

          {/* Icons */}
          <div className="flex items-center space-x-4">
            {/* Search */}
            <button aria-label="Search" className="p-2 rounded hover:bg-gray-100" onClick={() => setShowSearch(true)}>
              <svg className="h-6 w-6 text-gray-700 hover:text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-4.35-4.35m1.85-5.15a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>

            {/* User Account */}
            <NavLink to="/account" onClick={handleLinkClick} aria-label="Account" className="p-2 rounded hover:bg-gray-100">
              <svg className="h-6 w-6 text-gray-700 hover:text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5.121 17.804A4 4 0 018 16h8a4 4 0 012.879 1.804M12 14a4 4 0 100-8 4 4 0 000 8z" />
              </svg>
            </NavLink>

            {/* Cart */}
            <NavLink to="/cart" onClick={handleLinkClick} className="relative p-2 rounded hover:bg-gray-100" aria-label="Cart">
              <svg className="h-6 w-6 text-gray-700 hover:text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13l-1.5 6h11l-1.5-6M7 13h10" />
              </svg>
              {cart.length > 0 && (
                <span className="absolute top-1 right-0 bg-red-500 text-white text-xs w-4 h-4 rounded-full flex items-center justify-center animate-bounce">
                  {cart.length}
                </span>
              )}
            </NavLink>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                aria-label="Toggle Menu"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 rounded hover:bg-gray-100"
              >
                <svg className="h-6 w-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Nav Links */}
        <div className={`md:hidden overflow-hidden transition-all duration-300 ${isMobileMenuOpen ? "max-h-60 opacity-100" : "max-h-0 opacity-0"}`}>
          <div className="flex flex-col mt-2 space-y-2 p-2 bg-white rounded shadow">
            {["/", "/shop", "/about", "/contact"].map((path, index) => (
              <NavLink
                key={index}
                to={path}
                onClick={handleLinkClick}
                className="block text-gray-700 hover:text-black transition px-4 py-2 rounded hover:bg-gray-100"
              >
                {path === "/" ? "Home" : path.replace("/", "").charAt(0).toUpperCase() + path.slice(2)}
              </NavLink>
            ))}
          </div>
        </div>
      </div>
      {showSearch && <Search onClose={() => setShowSearch(false)}/>}
    </nav>
  );
};

export default Navbar;
