import React from "react";
import teacher from "../assets/images/teacher.png";

const RegisterTeacher = () => {
  return (
    <section className=" flex flex-col md:flex-row items-stretch bg-gradient-to-b from-purple-50 to-purple-100 p-6 lg:px-56">
      {/* Left Section: Image */}
      <div className="md:w-1/2 h-full flex items-center justify-center">
        <img
          src={teacher}
          alt="Login Illustration"
          className="w-full max-w-md md:max-w-full h-auto object-cover rounded-lg shadow-lg"
        />
      </div>

      {/* Right Section: Form */}
      <div className="md:w-1/2 flex flex-col items-center justify-center px-6 md:px-12 space-y-6">
        {/* Logo */}
        <h1 className="text-3xl md:text-4xl font-bold text-purple-900">logo</h1>

        {/* Welcome Message */}
        <h2 className="text-xl md:text-2xl font-semibold text-purple-700">
          Bienvenue à ...!
        </h2>

        {/* Buttons */}
        <div className="flex space-x-4">
          <button className="px-6 py-3 bg-purple-700 text-white rounded-lg shadow-md hover:opacity-90">
            Se connecter
          </button>
          <button className="px-6 py-3 bg-white text-purple-700 border border-purple-700 rounded-lg shadow-md hover:bg-purple-100">
            S'inscrire
          </button>
        </div>

        {/* Description */}
        <p className="text-gray-600 text-center">
          Transformez votre manière d’enseigner avec les nouvelles technologies
          ! Des cours simples et pratiques pour maîtriser les outils numériques
          et innover dans vos classes.
        </p>

        {/* Form */}
        <form className="w-full space-y-6">
          {/* Email Input */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Email
            </label>
            <input
              type="email"
              placeholder="Entrez votre email"
              className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-700"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Nom et prénom
            </label>
            <input
              type="text"
              placeholder="Entrez votre nom et prénom"
              className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-700"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Etablissement
            </label>
            <input
              type="text"
              placeholder="Entrez votre établissement"
              className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-700"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Matière enseignée
            </label>
            <select
              className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-700"
              defaultValue=""
            >
              <option value="" disabled>
                Sélectionnez une matière
              </option>
              <option value="mathematics">Mathématiques</option>
              <option value="science">Sciences</option>
              <option value="literature">Littérature</option>
              <option value="history">Histoire</option>
              <option value="language">Langues</option>
              <option value="other">Autre</option>
            </select>
          </div>

          {/* Password Input */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Mot de passe
            </label>
            <div className="relative">
              <input
                type="password"
                placeholder="Entrez votre mot de passe"
                className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-700"
              />
              <button
                type="button"
                className="absolute right-4 top-3 text-gray-500 hover:text-purple-700"
              >
                👁️
              </button>
            </div>
          </div>

          {/* Submit Buttons */}
          <div className="flex flex-col items-center gap-4">
            <button
              type="submit"
              className="w-[40%] px-6 py-3 bg-gradient-to-r from-purple-700 to-purple-900 text-white font-semibold rounded-lg shadow-md hover:opacity-90"
            >
              S'inscrire
            </button>

            <button
              type="button"
              className="px-6 py-3 bg-gradient-to-r from-purple-700 to-purple-900 text-white font-semibold rounded-lg shadow-md hover:opacity-90"
            >
              S'inscrire en tant que Mentor
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default RegisterTeacher;
