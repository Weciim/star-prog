import React from 'react';

const Lessons = () => {
  return (
    <section className="bg-[#EDE9F2] py-12 px-6">
      <div className="max-w-7xl mx-auto flex flex-col gap-28">
        {/* First Child: Title, Paragraph, and Buttons */}
        <div className="flex flex-col items-center text-center gap-6">
          <h2 className="text-3xl md:text-4xl font-bold text-purple-900 mb-4">
            Qualified lessons for students
          </h2>
          <p className="text-gray-600 text-lg mb-6 max-w-lg">
            A lesson or class is a structured period of time where learning is
            intended to occur. It involves one or more students being taught by
            a teacher or instructor.
          </p>
          <div className="flex space-x-4">
            <button className="px-6 py-3 bg-gray-100 text-purple-700 font-semibold rounded-lg shadow hover:bg-gray-200 transition">
              Kindergarten
            </button>
            <button className="px-6 py-3 bg-purple-700 text-white font-semibold rounded-lg shadow hover:opacity-90 transition">
              High School
            </button>
            <button className="px-6 py-3 bg-gray-100 text-purple-700 font-semibold rounded-lg shadow hover:bg-gray-200 transition">
              College
            </button>
          </div>
        </div>

        {/* Second Child: Grid of Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Card 1 */}
          <div className="bg-white shadow-lg rounded-lg p-6 text-center flex flex-col items-center">
            <div className="text-3xl font-bold text-white mb-4 rounded-full w-12 h-12 bg-gradient-to-b from-[#F9880D] to-[#FFB54A] flex items-center justify-center">
              1
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Standard One</h3>
            <p className="text-gray-600 mb-4 max-w-xs">
              Standard 1 is a foundation Standard that reflects 7 important
              concepts...
            </p>
            <button className="px-4 py-2 border border-purple-700 text-purple-700 font-semibold rounded-lg hover:bg-purple-700 hover:text-white transition">
              Class Details
            </button>
          </div>

          {/* Card 2 */}
          <div className="bg-white shadow-lg rounded-lg p-6 text-center flex flex-col items-center">
            <div className="text-3xl font-bold text-white mb-4 rounded-full w-12 h-12 bg-gradient-to-r from-[#232323] to-[#424242] flex items-center justify-center">
              2
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Standard Two</h3>
            <p className="text-gray-600 mb-4 max-w-xs">
              Standard 2 builds on the foundations of Standard 1 and includes
              requirements...
            </p>
            <button className="px-4 py-2 border border-purple-700 text-purple-700 font-semibold rounded-lg hover:bg-purple-700 hover:text-white transition">
              Class Details
            </button>
          </div>

          {/* Card 3 */}
          <div className="bg-white shadow-lg rounded-lg p-6 text-center flex flex-col items-center">
            <div className="text-3xl font-bold text-white mb-4 rounded-full w-12 h-12 bg-gradient-to-b from-blue-500 to-green-500 flex items-center justify-center">
              3
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Standard Three</h3>
            <p className="text-gray-600 mb-4 max-w-xs">
              Standard 3 of the Aged Care Quality Standards applies to all
              services delivering personal...
            </p>
            <button className="px-4 py-2 border border-purple-700 text-purple-700 font-semibold rounded-lg hover:bg-purple-700 hover:text-white transition">
              Class Details
            </button>
          </div>

          {/* Card 4 */}
          <div className="bg-white shadow-lg rounded-lg p-6 text-center flex flex-col items-center">
            <div className="text-3xl font-bold text-white mb-4 rounded-full w-12 h-12 bg-gradient-to-r from-purple-700 to-pink-500 flex items-center justify-center">
              4
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Standard Four</h3>
            <p className="text-gray-600 mb-4 max-w-xs">
              Standard 4 of the Aged Care Quality Standards focuses on services
              and supports...
            </p>
            <button className="px-4 py-2 border border-purple-700 text-purple-700 font-semibold rounded-lg hover:bg-purple-700 hover:text-white transition">
              Class Details
            </button>
          </div>

          {/* Card 5 */}
          <div className="bg-white shadow-lg rounded-lg p-6 text-center flex flex-col items-center">
            <div className="text-3xl font-bold text-white mb-4 rounded-full w-12 h-12 bg-gradient-to-t from-amber-300 to-yellow-100 flex items-center justify-center">
              5
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Standard Five</h3>
            <p className="text-gray-600 mb-4 max-w-xs">
              Standard 5 provides a structured period of time...
            </p>
            <button className="px-4 py-2 border border-purple-700 text-purple-700 font-semibold rounded-lg hover:bg-purple-700 hover:text-white transition">
              Class Details
            </button>
          </div>

          <div className="bg-white shadow-lg rounded-lg p-6 text-center flex flex-col items-center">
                  <div className="text-3xl font-bold text-white mb-4 rounded-full w-12 h-12 bg-gradient-to-br from-indigo-500 via-purple-400 to-pink-500 flex items-center justify-center">
                    6
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Standard Six</h3>
                  <p className="text-gray-600 mb-4">
                    Standard 6 is a foundation Standard that reflects 7 important concepts...
                  </p>
                  <button className="px-4 py-2 border border-purple-700 text-purple-700 font-semibold rounded-lg hover:bg-purple-700 hover:text-white transition">
                    Class Details
                  </button>
            </div>

            <div className="bg-white shadow-lg rounded-lg p-6 text-center flex flex-col items-center">
                  <div className="text-3xl font-bold text-white mb-4 rounded-full w-12 h-12 bg-gradient-to-r from-[#FF3333] via-[#C60000] to-[#FF3333] flex items-center justify-center">
                    7
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Standard Seven</h3>
                  <p className="text-gray-600 mb-4">
                    Standard 7 is a foundation Standard that reflects 7 important concepts...
                  </p>
                  <button className="px-4 py-2 border border-purple-700 text-purple-700 font-semibold rounded-lg hover:bg-purple-700 hover:text-white transition">
                    Class Details
                  </button>
            </div>

            <div className="bg-white shadow-lg rounded-lg p-6 text-center flex flex-col items-center">
                  <div className="text-3xl font-bold text-white mb-4 rounded-full w-12 h-12 bg-gradient-to-tl from-indigo-700 via-purple-600 to-pink-500 flex items-center justify-center">
                    8
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Standard Eight</h3>
                  <p className="text-gray-600 mb-4">
                    Standard 8 is a foundation Standard that reflects 7 important concepts...
                  </p>
                  <button className="px-4 py-2 border border-purple-700 text-purple-700 font-semibold rounded-lg hover:bg-purple-700 hover:text-white transition">
                    Class Details
                  </button>
            </div>

          {/* Additional cards follow similar structure */}
        </div>

        {/* Button to View More */}
        <div className="text-center">
          <button className="px-6 py-3 bg-gradient-to-r from-purple-700 to-purple-900 text-white font-semibold rounded-lg shadow-lg hover:opacity-90 transition">
            Visit More Classes
          </button>
        </div>
      </div>
    </section>
  );
};

export default Lessons;
