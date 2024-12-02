import React from "react";

const CourseDescription = () => {
  return (
    <section className="bg-[#f5effb] py-8 px-6">
      <div className="max-w-5xl mx-auto space-y-8">
        {/* Course Title */}
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-800">
          AI 101 pour enseignants | Episode 2
        </h2>

        {/* Description Section */}
        <div>
          <h3 className="text-lg font-bold text-purple-700 mb-2">
            Description du cours
          </h3>
          <p className="text-gray-600 leading-relaxed">
            Introduction aux fondamentaux de l'intelligence artificielle qui
            vous fournira les connaissances de base pour comprendre l'impact
            profond de l'IA dans notre société et sa pertinence croissante dans
            le domaine de l'éducation. Obtenez des informations pratiques sur
            l'exploitation de l'IA pour les tâches en classe et le gain de temps
            sur les tâches administratives.
          </p>
        </div>

        {/* Target Audience */}
        <div>
          <h3 className="text-lg font-bold text-purple-700 mb-2">
            Pour qui ce cours est conçu ?
          </h3>
          <p className="text-gray-600 leading-relaxed">
            Ce cours est conçu pour les enseignants de toutes les matières,
            cherchant à découvrir le domaine de l'intelligence artificielle.
          </p>
        </div>

        {/* What You'll Learn */}
        <div>
          <h3 className="text-lg font-bold text-purple-700 mb-4">
            What you'll learn in this course:
          </h3>
          <ul className="space-y-2">
            <li className="flex items-center text-gray-600">
              <span className="w-3 h-3 rounded-full bg-red-500 mr-3"></span>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </li>
            <li className="flex items-center text-gray-600">
              <span className="w-3 h-3 rounded-full bg-red-500 mr-3"></span>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </li>
            <li className="flex items-center text-gray-600">
              <span className="w-3 h-3 rounded-full bg-red-500 mr-3"></span>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </li>
            <li className="flex items-center text-gray-600">
              <span className="w-3 h-3 rounded-full bg-red-500 mr-3"></span>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </li>
          </ul>
        </div>

        {/* Help Section */}
        <div>
          <h3 className="text-lg font-bold text-purple-700 mb-4">
            Some things can help you:
          </h3>
          <ul className="space-y-2">
            <li className="flex items-center text-gray-600">
              <span className="w-3 h-3 rounded-full bg-red-500 mr-3"></span>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </li>
            <li className="flex items-center text-gray-600">
              <span className="w-3 h-3 rounded-full bg-red-500 mr-3"></span>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default CourseDescription;
