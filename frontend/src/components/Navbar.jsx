import React from "react";
import Logo from "../assets/images/Logo.png"
import Cart from "../assets/icons/cart.png"
import Profile from "../assets/icons/profile.png"
import { useLocation } from "react-router-dom";


export default function Navbar() {
  
  const location = useLocation() ;
  console.log(location.pathname)
  const backgroundStyle = location.pathname === "/" ? "transparent" : "linear-gradient(90deg, #532B88 0%, #2F184B 100%)"



  return (
    <nav className=" text-white px-6 py-4 font-merriweather font-light" style={{ background: backgroundStyle }}>
      <div className=" mx-auto flex justify-between ">
        {/* Logo Section */}
        <div className="flex items-center mx-14">
          <img
            src={Logo} // Replace with your logo path
            alt="Eduvi Logo"
            className="h-8"
          />
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex space-x-6 justify-between gap-8">
          <a href="/shop" className="hover:text-gray-300">
            Shop
          </a>
          <div className="group relative">
            <button className="hover:text-gray-300">For Kindergarten</button>
            {/* Dropdown */}
            <div className="absolute hidden group-hover:block bg-white text-black rounded shadow-lg mt-2 w-48">
              <a href="/kindergarten/item1" className="block px-4 py-2 hover:bg-gray-200">
                Item 1
              </a>
              <a href="/kindergarten/item2" className="block px-4 py-2 hover:bg-gray-200">
                Item 2
              </a>
            </div>
          </div>
          <div className="group relative">
            <button className="hover:text-gray-300">For High School</button>
            {/* Dropdown */}
            <div className="absolute hidden group-hover:block bg-white text-black rounded shadow-lg mt-2 w-48">
              <a href="/highschool/item1" className="block px-4 py-2 hover:bg-gray-200">
                Item 1
              </a>
              <a href="/highschool/item2" className="block px-4 py-2 hover:bg-gray-200">
                Item 2
              </a>
            </div>
          </div>
          <div className="group relative">
            <button className="hover:text-gray-300">For College</button>
            {/* Dropdown */}
            <div className="absolute hidden group-hover:block bg-white text-black rounded shadow-lg mt-2 w-48">
              <a href="/college/item1" className="block px-4 py-2 hover:bg-gray-200">
                Item 1
              </a>
              <a href="/college/item2" className="block px-4 py-2 hover:bg-gray-200">
                Item 2
              </a>
            </div>
          </div>
          <div className="group relative">
            <button className="hover:text-gray-300">Courses</button>
            {/* Dropdown */}
            <div className="absolute hidden group-hover:block bg-white text-black rounded shadow-lg mt-2 w-48">
              <a href="/courses/item1" className="block px-4 py-2 hover:bg-gray-200">
                Item 1
              </a>
              <a href="/courses/item2" className="block px-4 py-2 hover:bg-gray-200">
                Item 2
              </a>
            </div>
          </div>
        </div>

        {/* Icons Section */}
        <div className="flex items-center mx-16 justify-between gap-5">
          <a href="/cart" className="flex items-center hover:text-gray-300">
            <span className="material-icons">cart(0)</span>
            <img src={Cart} alt="cart"
            className="h-7 ml-2" />
          </a>
          <a href="/account" className="flex items-center hover:text-gray-300">
            <span className="material-icons">My account</span>
            <img src={Profile} alt="profile"
            className="h-7 ml-2" />
          </a>
        </div>
      </div>
    </nav>
  );
}
