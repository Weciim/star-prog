import React, { useState } from "react";
import axios from "axios";
import teacher from "../assets/images/teacher.png";

const RegisterTeacher = () => {
  // State for form data
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    institution: "",
    subjects: "",
  });

  // State for API response
  const [responseMessage, setResponseMessage] = useState("");

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission

    try {
      const response = await axios.post("http://localhost:5000/api/teachers/create", {
        ...formData,
        subjects: formData.subjects.split(",").map((subject) => subject.trim()), // Convert subjects to an array
      });

      // Set success message
      setResponseMessage(response.data.message);
    } catch (error) {
      // Handle errors
      setResponseMessage(error.response?.data?.message || "Failed to register teacher");
    }
  };

  return (
    <section className="flex flex-col md:flex-row items-stretch bg-gradient-to-b from-purple-50 to-purple-100 p-6 lg:px-56">
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
        <h2 className="text-xl md:text-2xl font-semibold text-purple-700">Bienvenue à ...!</h2>

        {/* Description */}
        <p className="text-gray-600 text-center">
          Transformez votre manière d’enseigner avec les nouvelles technologies
          ! Des cours simples et pratiques pour maîtriser les outils numériques
          et innover dans vos classes.
        </p>

        {/* Form */}
        <form onSubmit={handleSubmit} className="w-full space-y-6">
          {/* Name Input */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Nom et prénom</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Entrez votre nom et prénom"
              className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-700"
              required
            />
          </div>

          {/* Email Input */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Entrez votre email"
              className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-700"
              required
            />
          </div>

          {/* Password Input */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Mot de passe</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Entrez votre mot de passe"
              className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-700"
              required
            />
          </div>

          {/* Institution Input */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Etablissement</label>
            <input
              type="text"
              name="institution"
              value={formData.institution}
              onChange={handleChange}
              placeholder="Entrez votre établissement"
              className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-700"
              required
            />
          </div>

          {/* Subjects Input */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Matière enseignée</label>
            <input
              type="text"
              name="subjects"
              value={formData.subjects}
              onChange={handleChange}
              placeholder="Entrez les matières, séparées par des virgules"
              className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-700"
              required
            />
          </div>

          {/* Submit Button */}
          <div className="flex flex-col items-center gap-4">
            <button
              type="submit"
              className="w-[40%] px-6 py-3 bg-gradient-to-r from-purple-700 to-purple-900 text-white font-semibold rounded-lg shadow-md hover:opacity-90"
            >
              S'inscrire
            </button>
          </div>
        </form>

        {/* Response Message */}
        {responseMessage && (
          <div className="mt-4 text-center text-purple-700 font-semibold">
            {responseMessage}
          </div>
        )}
      </div>
    </section>
  );
};

export default RegisterTeacher;
