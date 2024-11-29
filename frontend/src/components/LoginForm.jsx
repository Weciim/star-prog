import React from 'react'
import loginImg from '../assets/images/loginimg.png'

const LoginForm = () => {
  return (
    <section className=" flex flex-col md:flex-row items-center bg-gradient-to-b from-purple-50 to-purple-100 p-10 lg:px-56">
    {/* Left Section: Image */}
    <div className="w-1/2 h-[80%]">
      <img
        src={loginImg}
        alt="Login Illustration"
        className="w-full max-w-xl h-auto rounded-lg shadow-lg"
      />
    </div>

    {/* Right Section: Login Form */}
    <div className="w-1/2 flex flex-col items-center justify-center px-12 space-y-8">
      {/* Logo */}
      <h1 className="text-4xl font-bold text-purple-900">logo</h1>

      {/* Welcome Message */}
      <h2 className="text-2xl font-semibold text-purple-700">
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
              {/* Eye Icon */}
              👁️
            </button>
          </div>
        </div>

        {/* Remember Me and Forgot Password */}
        <div className="flex justify-between items-center text-sm text-gray-600">
          <div className="flex items-center space-x-2">
            <input
              type="checkbox"
              id="remember-me"
              className="w-4 h-4 text-purple-700 border-gray-300 rounded focus:ring-purple-700"
            />
            <label htmlFor="remember-me">Se souvenir de moi</label>
          </div>
          <a href="#" className="text-purple-700 hover:underline">
            Mot de passe oublié ?
          </a>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full px-6 py-3 bg-gradient-to-r from-purple-700 to-purple-900 text-white font-semibold rounded-lg shadow-md hover:opacity-90"
        >
          Se connecter
        </button>
      </form>
    </div>
  </section>
  )
}

export default LoginForm