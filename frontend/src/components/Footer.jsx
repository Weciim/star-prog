import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#EDE9F2] py-12 px-6">
      {/* Grid Container */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
        {/* First Column: Logo and Social Media */}
        <div className="flex flex-col items-start space-y-4">
          <h3 className="text-2xl font-bold text-purple-900">Eduvi</h3>
          <p className="text-gray-600 text-sm">
            ©2021 Eduvi.co <br />
            Eduvi is a registered trademark of Eduvi.co
          </p>
          <div className="flex gap-4 mt-2">
            <a href="#" className="text-purple-900 hover:text-purple-700">
              <FaFacebookF size={20} />
            </a>
            <a href="#" className="text-purple-900 hover:text-purple-700">
              <FaInstagram size={20} />
            </a>
            <a href="#" className="text-purple-900 hover:text-purple-700">
              <FaTwitter size={20} />
            </a>
            <a href="#" className="text-purple-900 hover:text-purple-700">
              <FaLinkedinIn size={20} />
            </a>
          </div>
        </div>

        {/* Second to Fifth Columns: Footer Links */}
        <div>
          <h4 className="font-semibold text-purple-900 mb-4">Courses</h4>
          <ul className="space-y-2 text-gray-600">
            <li><a href="#">Classroom courses</a></li>
            <li><a href="#">Virtual classroom courses</a></li>
            <li><a href="#">E-learning courses</a></li>
            <li><a href="#">Video Courses</a></li>
            <li><a href="#">Offline Courses</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-purple-900 mb-4">Community</h4>
          <ul className="space-y-2 text-gray-600">
            <li><a href="#">Learners</a></li>
            <li><a href="#">Partners</a></li>
            <li><a href="#">Developers</a></li>
            <li><a href="#">Transactions</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Teaching Center</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-purple-900 mb-4">Quick Links</h4>
          <ul className="space-y-2 text-gray-600">
            <li><a href="#">Home</a></li>
            <li><a href="#">Professional Education</a></li>
            <li><a href="#">Courses</a></li>
            <li><a href="#">Admissions</a></li>
            <li><a href="#">Testimonial</a></li>
            <li><a href="#">Programs</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-purple-900 mb-4">More</h4>
          <ul className="space-y-2 text-gray-600">
            <li><a href="#">Press</a></li>
            <li><a href="#">Investors</a></li>
            <li><a href="#">Terms</a></li>
            <li><a href="#">Privacy</a></li>
            <li><a href="#">Help</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
