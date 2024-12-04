import React from "react";
import teacher1 from '../assets/images/teacher1.png'
import teacher2 from '../assets/images/teacher2.png'
import teacher3 from '../assets/images/teacher3.png'

const ExpertSection = () => {
  const experts = [
    {
      name: "Jane Cooper",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
      image: teacher1, // Replace with actual image URLs
    },
    {
      name: "Ada",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
      image: teacher2, // Replace with actual image URLs
    },
    {
      name: "Tom",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
      image: teacher3, // Replace with actual image URLs
    },
    {
      name: "Jane Cooper",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
      image: teacher1, // Replace with actual image URLs
    },
    {
      name: "Jane Cooper",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
      image: teacher1, // Replace with actual image URLs
    },
    {
      name: "Jane Cooper",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
      image: teacher1, // Replace with actual image URLs
    },
  ];

  return (
    <section className="bg-[#f5effb] py-10 px-6 lg:px-20">
      {/* Header Section */}
      <div className="flex justify-between items-center mb-8">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Need help</h2>
          <p className="text-lg text-gray-500">Contact our experts</p>
        </div>
        <a href="#" className="text-teal-600 font-medium hover:underline">
          See all
        </a>
      </div>

      {/* Experts Grid */}
      <div className=" mx-7 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {experts.map((expert, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-lg p-6 text-center"
          >
            <img
              src={expert.image}
              alt={expert.name}
              className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
            />
            <h3 className="text-lg font-semibold text-gray-800">{expert.name}</h3>
            <p className="text-sm text-gray-600 mt-2">{expert.description}</p>
          </div>
        ))}
      </div>

      {/* Footer Section */}
      <div className="flex justify-between items-center mt-12 bg-purple-100 p-6 rounded-lg">
        <h3 className="text-lg font-semibold text-purple-900">
          Give us your feedback
        </h3>
        <button className="flex items-center gap-2 bg-purple-600 text-white px-4 py-2 rounded-lg shadow-md hover:bg-purple-700">
          Write your assessment
          <span className="text-lg">&rarr;</span>
        </button>
      </div>
    </section>
  );
};

export default ExpertSection;
