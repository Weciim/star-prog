import React from 'react';
import courseimg from '../assets/images/course.png';
import { motion } from 'framer-motion';

const Courses = () => {
  const courses = [
    {
      title: "AI 101 pour enseignants",
      description: "Introduction aux fondamentaux de l’intelligence artificielle qui vous fournira les connaissances de base pour comprendre...",
      link: "Voir plus",
    },
    {
      title: "Démonstration d’outil d’IA",
      description: "Differentiating Class Materials With Drift",
      link: "See more",
    },
    {
      title: "Construire un noyau",
      description: "Expliquez comment le changement du nombre de neutrons du proton affecte le numéro atomique et les espaces isotopiques.",
      link: "See more",
    },
    {
      title: "Laboratoire de données sur les projectiles",
      description: "Visualisez et écoutez les données résultant du caractère aléatoire de la vitesse et de l’angle de lancement dans le monde réel.",
      link: "Voir plus",
    },
    {
      title: "Laboratoire électromagnétique de Faraday",
      description: "Prédire la direction du champ magnétique pour différents emplacements autour d’une barre aimantée et d’un électroaimant.",
      link: "Voir plus",
    },
    {
      title: "Aiment et boussole",
      description: "Prédire la direction du champ magnétique pour différents emplacements autour d’une barre aimantée et d’un électroaimant.",
      link: "Voir plus",
    },
    {
      title: "Addition de vecteurs",
      description: "Organiser des vecteurs graphiquement pour représenter l’addition ou la soustraction de vecteurs.",
      link: "Voir plus",
    },
    {
      title: "Ajustement de courbe",
      description: "Expliquez comment la plage, l’incertitude et le nombre de points de données affectent le coefficient de corrélation et le chi carré.",
      link: "Voir plus",
    },
  ];

  // Framer Motion Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.4, // Delay between children animations
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section className="bg-[#f5effb] py-16">
      <div className="container mx-auto">
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 p-10"
          initial="hidden"
          whileInView="visible"
          variants={containerVariants}
          viewport={{ once: true, amount: 0.3 }} // Trigger animation when visible
        >
          {courses.map((course, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden transition hover:shadow-xl p-4"
              variants={itemVariants} // Apply animation to each item
            >
              <img
                src={courseimg}
                alt={course.title}
                className="w-full h-40 object-cover"
              />
              <div className="p-6">
                <h3 className="text-lg font-bold text-gray-800 mb-2">
                  {course.title}
                </h3>
                <p className="text-sm text-gray-600 mb-4">
                  {course.description}
                </p>
                <a
                  href="/courses/1"
                  className="text-purple-600 font-semibold hover:underline"
                >
                  {course.link}
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* View All Button */}
        <div className="text-center mt-8">
          <button className="px-6 py-3 bg-purple-600 text-white rounded-lg shadow-md hover:bg-purple-700 transition">
            Voir tout
          </button>
        </div>
      </div>
    </section>
  );
};

export default Courses;
