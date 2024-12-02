import React from 'react'
import profile1 from '../assets/icons/profile1.png'
import profile2 from '../assets/icons/profile2.png'
import profile3 from '../assets/icons/profile3.png'
import profile4 from '../assets/icons/profile4.png'
import profile5 from '../assets/icons/profile5.png'
import profile6 from '../assets/icons/profile6.png'

const SubscribeNow = () => {
  return (
    <section className="bg-[#f5effb] py-12 px-6">
      <div className="relative max-w-7xl mx-auto bg-gradient-to-r from-purple-700 to-purple-900 text-white rounded-lg p-16 lg:p-24">
        {/* Decorative Images */}
        <div className="absolute top-[10%] left-[4%]">
          <img
            src={profile1}
            alt="Profile 1"
            className="w-12 h-12 rounded-full border-2 border-white"
          />
        </div>
        <div className="absolute top-[10%] right-[4%]">
          <img
            src={profile2}
            alt="Profile 2"
            className="w-12 h-12 rounded-full border-2 border-white"
          />
        </div>
        <div className="absolute top-[40%] left-[12%]">
          <img
            src={profile3}
            alt="Profile 3"
            className="w-12 h-12 rounded-full border-2 border-white"
          />
        </div>
        <div className="absolute top-[40%] right-[12%]">
          <img
            src={profile4}
            alt="Profile 4"
            className="w-12 h-12 rounded-full border-2 border-white"
          />
        </div>
        <div className="absolute bottom-[10%] left-[4%]">
          <img
            src={profile5}
            alt="Profile 5"
            className="w-12 h-12 rounded-full border-2 border-white"
          />
        </div>
        <div className="absolute bottom-[10%] right-[4%]">
          <img
            src={profile6}
            alt="Profile 6"
            className="w-12 h-12 rounded-full border-2 border-white"
          />
        </div>

        {/* Content */}
        <div className="text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Subscribe To Get Updated on Every New Course
          </h2>
          <p className="text-gray-300 mb-6">
            20k+ students daily learn with Eduvi. Subscribe for new courses.
          </p>
          <div className="flex justify-center items-center gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-3 rounded-lg text-gray-700 w-64 focus:outline-none"
            />
            <button className="px-6 py-3 bg-gradient-to-r from-purple-500 to-purple-700 text-white font-semibold rounded-lg shadow-lg hover:opacity-90 transition">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SubscribeNow