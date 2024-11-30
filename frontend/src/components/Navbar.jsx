import React, { useEffect, useState } from "react";
import Logo from "../assets/images/Logo.png";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

export default function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();
  const backgroundStyle =
    location.pathname === "/" || location.pathname === "/profile"
      ? "transparent"
      : "linear-gradient(90deg, #532B88 0%, #2F184B 100%)";

  const [userName, setUserName] = useState(null);

  // Fetch user details if token exists
  useEffect(() => {
    const fetchUserDetails = async () => {
      const token = localStorage.getItem("token");
      const userId = localStorage.getItem("userId");

      if (token && userId) {
        try {
          const response = await axios.get(
            `http://localhost:5000/api/auth/profile/${userId}`,
            {
              headers: {
                Authorization: `Bearer ${token}`, // Include token in Authorization header
              },
            }
          );
          setUserName(response.data.user.name);
        } catch (error) {
          console.error("Failed to fetch user details:", error);
        }
      }
    };

    fetchUserDetails();
  }, []);

  // Handle Logout
  const handleLogout = async () => {
    try {
      // Optional: Call the backend logout API
      await axios.post("http://localhost:5000/api/auth/logout");
  
      // Clear token and userId from local storage
      localStorage.removeItem("token");
      localStorage.removeItem("userId");
  
      // Trigger toast success message
      navigate('/login')
    } catch (error) {
      console.error("Logout failed:", error);
      toast.error("Logout failed! Please try again.");
    }
  };

  return (
    <nav
      className="text-white px-6 py-4 font-merriweather font-light"
      style={{ background: backgroundStyle }}
    >
      <div className="mx-auto flex justify-between">
        {/* Logo Section */}
        <div className="flex items-center mx-14">
          <img
            src={Logo} // Replace with your logo path
            alt="Eduvi Logo"
            className="h-8"
          />
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex space-x-6 justify-between gap-16">
          <a href="/shop" className="hover:text-gray-300">
            Accueil
          </a>
          <a href="/shop" className="hover:text-gray-300">
            Cours
          </a>
          <a href="/shop" className="hover:text-gray-300">
            Contact
          </a>
          <a href="/shop" className="hover:text-gray-300">
            Brainmate
          </a>
          {/* Other Navigation Items */}
        </div>

        {/* Icons Section */}
        <div className="flex items-center mx-16 justify-between gap-5">
          {userName ? (
            <>
              <button
                onClick={handleLogout}
                className="px-4 py-2 bg-[#F4EFFA] text-purple-700 border border-purple-700 rounded-full hover:bg-purple-100"
              >
                Logout
              </button>
              <a
                href="/profile"
                className="px-4 py-2 bg-[#C8B1E4] text-black rounded-full hover:opacity-90"
              >
                {userName}
              </a>
            </>
          ) : (
            <>
              <button
                onClick={() => navigate("/login")}
                className="px-4 py-2 bg-[#F4EFFA] text-purple-700 border border-purple-700 rounded-full hover:bg-purple-100"
              >
                Connexion
              </button>
              <button
                onClick={() => navigate("/register")}
                className="px-4 py-2 bg-[#C8B1E4] text-black rounded-full hover:opacity-90"
              >
                S'inscrire
              </button>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}
