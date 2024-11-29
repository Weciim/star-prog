import React from "react";
import teacher from "../assets/images/courseimg.png";
import kid from "../assets/images/kid.png";
import speaker from "../assets/icons/speaker.png";
import live from "../assets/icons/live.png";
import playbtn from "../assets/icons/playbtn.png";

const Courses = () => {
  return (
    <section className="bg-[#EDE9F2] py-12 px-6">
      <div className="max-w-7xl mx-auto flex flex-col gap-8">
        {/* First Div: Heading, Paragraph, and Button */}
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-merriweather font-bold text-purple-900 mb-4">
            High quality video, audio <br /> & live classes
          </h2>
          <p className="text-gray-600 text-lg mb-6">
            High-definition video is video of higher resolution and quality than
            standard-definition. While there is no standardized meaning for
            high-definition, generally any video image with considerably more
            than 480 vertical scan lines or 576 vertical lines is considered
            high-definition.
          </p>
          <button className="bg-gradient-to-r from-purple-700 to-purple-900 text-white font-semibold py-3 px-8 rounded-lg shadow-lg hover:opacity-90 transition duration-300">
            Visit Courses
          </button>
        </div>

        {/* Second Div: Video and Features Section */}
        <div className="flex flex-col gap-8">
          {/* Video Section */}
          <div className="relative bg-white shadow-lg p-5 rounded-lg overflow-hidden mx-auto max-w-4xl">
            <img src={teacher} alt="Live Class" className="w-full h-full" />
            {/* Small Floating Image */}
            <div className="absolute bottom-8 left-8 bg-white p-2 shadow-md rounded-lg">
              <img src={kid} alt="Child" className="w-[120px] h-auto rounded-md" />
            </div>
          </div>

          {/* Features Section */}
          <div className="flex flex-wrap justify-center gap-6">
            {/* Feature: Audio Classes */}
            <div className="flex items-center bg-white shadow-md rounded-lg px-6 py-4 space-x-4">
              <div className="bg-[#FFF4F2] p-4 rounded-lg flex items-center justify-center">
                <img src={speaker} alt="Volume Icon" className="w-6 h-6" />
              </div>
              <p className="font-semibold text-gray-800">Audio Classes</p>
            </div>

            {/* Feature: Live Classes */}
            <div className="flex items-center bg-white shadow-md rounded-lg px-6 py-4 space-x-4">
              <div className="bg-[#F8F2FF] p-4 rounded-lg flex items-center justify-center">
                <img src={live} alt="Live Icon" className="w-6 h-6" />
              </div>
              <p className="font-semibold text-gray-800">Live Classes</p>
            </div>

            {/* Feature: Recorded Classes */}
            <div className="flex items-center bg-white shadow-md rounded-lg px-6 py-4 space-x-4">
              <div className="bg-[#E5FFF3] p-4 rounded-lg flex items-center justify-center">
                <img src={playbtn} alt="Play Icon" className="w-6 h-6" />
              </div>
              <p className="font-semibold text-gray-800">Recorded Classes</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Courses;
