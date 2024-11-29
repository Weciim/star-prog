import React from "react";
import Student from "../assets/images/Image.png"
import Navbar from "./Navbar";
import Herbg from "../assets/images/herobg.png"


export default function Hero() {
  return (
    <div className='bg-cover bg-center min-h-screen' style={{  backgroundImage: `url(${Herbg})`}}> 
    <Navbar></Navbar>
    <section className=" text-white py-12">
      <div className="container mx-auto flex flex-col md:flex-row items-center">
        {/* Left Content */}
        <div className="md:w-1/2 text-center md:text-left   md:ml-12 ">
          <div className="bg-white text-purple-700 px-4 py-2 inline-block  text-xl rounded-md font-normal mb-4 font-merriweather">
            Never Stop Learning
          </div>
          <h1 className="text-[70px] md:text-6xl font-merriweather font-light leading-tight mb-4">
            Grow up your skills by online courses with Eduvi
          </h1>
          <p className="text-sm text-white-400 mb-6 w-[70%]">
            Eduvi is a Global training provider based across the UK that
            specialises in accredited and bespoke training courses. We crush
            the barriers to getting a degree.
          </p>
          {/* Search Bar */}
          <div className="flex bg-white rounded-lg overflow-hidden">
            <select className="bg-transparent px-4 py-3 text-gray-700 border-r">
              <option>Kindergarten</option>
              <option>Primary</option>
              <option>High School</option>
              <option>College</option>
            </select>
            <input
              type="text"
              placeholder="Class/Course"
              className="px-4 py-3 flex-grow text-gray-700 focus:outline-none"
            />
            <button className="bg-purple-700 px-6 py-3 mt-1 mb-1 mr-1 rounded-md  text-white font-merriweather">
              Search
            </button>
          </div>
        </div>

        {/* Right Content */}
        <div className="md:w-1/2 mt-12 md:mt-0 relative px-6">
          <img
            src={Student} // Replace with the correct path for your image
            alt="Student"
            className="relative z-10"
          />
        </div>
      </div>
    </section>
    </div>
  );
}
