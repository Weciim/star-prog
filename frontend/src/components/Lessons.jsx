import React from 'react';
import { motion } from 'framer-motion';

const Lessons = () => {
  // Animation Variants
  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // Delay between child animations
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <motion.section
      className="bg-[#f5effb] py-12 px-6"
      initial="hidden"
      whileInView="visible"
      variants={staggerContainer}
      viewport={{ once: true, amount: 0.3 }}
    >
      <div className="max-w-7xl mx-auto flex flex-col gap-28">
        {/* First Child: Title, Paragraph, and Buttons */}
        <div className="flex flex-col items-center text-center gap-6">
          <button className="px-6 py-3 bg-gradient-to-r from-purple-500 to-purple-700 text-white rounded-lg shadow-md hover:opacity-90 transition">
            Commencer votre transition numérique
          </button>
          <h2 className="text-3xl md:text-4xl font-bold text-purple-900 mb-6">
            Cours Populaires
          </h2>
        </div>

        {/* Second Child: Grid of Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Card 1 */}
          <motion.div
            className="bg-white shadow-lg rounded-lg p-6 text-center flex flex-col items-center"
            variants={cardVariants}
          >
            <div className="text-3xl font-bold text-white mb-4 rounded-full w-12 h-12 bg-gradient-to-b from-[#F9880D] to-[#FFB54A] flex items-center justify-center">
              1
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Standard One</h3>
            <p className="text-gray-600 mb-4 max-w-xs">
              Standard 1 is a foundation Standard that reflects 7 important concepts...
            </p>
            <button className="px-4 py-2 border border-purple-700 text-purple-700 font-semibold rounded-lg hover:bg-purple-700 hover:text-white transition">
              Class Details
            </button>
          </motion.div>

          {/* Card 2 */}
          <motion.div
            className="bg-white shadow-lg rounded-lg p-6 text-center flex flex-col items-center"
            variants={cardVariants}
          >
            <div className="text-3xl font-bold text-white mb-4 rounded-full w-12 h-12 bg-gradient-to-r from-[#232323] to-[#424242] flex items-center justify-center">
              2
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Standard Two</h3>
            <p className="text-gray-600 mb-4 max-w-xs">
              Standard 2 builds on the foundations of Standard 1 and includes requirements...
            </p>
            <button className="px-4 py-2 border border-purple-700 text-purple-700 font-semibold rounded-lg hover:bg-purple-700 hover:text-white transition">
              Class Details
            </button>
          </motion.div>

          {/* Card 3 */}
          <motion.div
            className="bg-white shadow-lg rounded-lg p-6 text-center flex flex-col items-center"
            variants={cardVariants}
          >
            <div className="text-3xl font-bold text-white mb-4 rounded-full w-12 h-12 bg-gradient-to-b from-blue-500 to-green-500 flex items-center justify-center">
              3
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Standard Three</h3>
            <p className="text-gray-600 mb-4 max-w-xs">
              Standard 3 of the Aged Care Quality Standards applies to all services delivering personal...
            </p>
            <button className="px-4 py-2 border border-purple-700 text-purple-700 font-semibold rounded-lg hover:bg-purple-700 hover:text-white transition">
              Class Details
            </button>
          </motion.div>

          {/* Card 4 */}
          <motion.div
            className="bg-white shadow-lg rounded-lg p-6 text-center flex flex-col items-center"
            variants={cardVariants}
          >
            <div className="text-3xl font-bold text-white mb-4 rounded-full w-12 h-12 bg-gradient-to-r from-purple-700 to-pink-500 flex items-center justify-center">
              4
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Standard Four</h3>
            <p className="text-gray-600 mb-4 max-w-xs">
              Standard 4 of the Aged Care Quality Standards focuses on services and supports...
            </p>
            <button className="px-4 py-2 border border-purple-700 text-purple-700 font-semibold rounded-lg hover:bg-purple-700 hover:text-white transition">
              Class Details
            </button>
          </motion.div>

          {/* Card 5 */}
          <motion.div
            className="bg-white shadow-lg rounded-lg p-6 text-center flex flex-col items-center"
            variants={cardVariants}
          >
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
          </motion.div>

          {/* Card 6 */}
          <motion.div
            className="bg-white shadow-lg rounded-lg p-6 text-center flex flex-col items-center"
            variants={cardVariants}
          >
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
          </motion.div>

          {/* Card 7 */}
          <motion.div
            className="bg-white shadow-lg rounded-lg p-6 text-center flex flex-col items-center"
            variants={cardVariants}
          >
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
          </motion.div>

          {/* Card 8 */}
          <motion.div
            className="bg-white shadow-lg rounded-lg p-6 text-center flex flex-col items-center"
            variants={cardVariants}
          >
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
          </motion.div>
        </div>

        {/* Button to View More */}
        <motion.div
          className="text-center"
          variants={cardVariants}
        >
          <button className="px-6 py-3 bg-gradient-to-r from-purple-700 to-purple-900 text-white font-semibold rounded-lg shadow-lg hover:opacity-90 transition">
            Visit More Classes
          </button>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Lessons;
