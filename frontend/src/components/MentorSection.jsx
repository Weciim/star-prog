import React from 'react'
import mentor from '../assets/images/mentor.png'

const MentorSection = () => {
  return (
    <section className="bg-[#f5effb] py-12 px-6">
    <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
      {/* Left Child: Image */}
      <div className="lg:w-1/2 flex justify-center relative">
        <div className="bg-purple-100 rounded-full w-100 h-100 flex items-center justify-center">
          <img
            src={mentor}
            alt="Mentor"
            className="w-90 h-auto object-cover"
          />
        </div>
      </div>

      {/* Right Child: Text and Button */}
      <div className="lg:w-1/2 flex flex-col items-start text-left space-y-6">
        <h2 className="text-3xl md:text-4xl font-bold text-purple-900">
          Want to share your knowledge? <br /> Join us a Mentor
        </h2>
        <p className="text-gray-600 text-lg">
          High-definition video is video of higher resolution and quality
          than standard-definition. While there is no standardized meaning
          for high-definition, generally any video.
        </p>
        <button className="px-6 py-3 bg-gradient-to-r from-purple-700 to-purple-900 text-white font-semibold rounded-lg shadow-lg hover:opacity-90 transition">
          Career Information
        </button>
      </div>
    </div>
  </section>
  )
}

export default MentorSection