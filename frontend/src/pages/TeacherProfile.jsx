import React, { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";
import TeacherHero from "../components/TeacherHero";

const UserProfile = () => {
  const [userProfile, setUserProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const userId = localStorage.getItem("userId"); // Retrieve the user ID from local storage (you should store it during login)

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const token = localStorage.getItem("token"); // Retrieve the JWT token
        const response = await axios.get(`http://localhost:5000/api/auth/profile/${userId}`, {
          headers: {
            Authorization: `Bearer ${token}`, // Add the token in Authorization header
          },
        });
        setUserProfile(response.data);
        setLoading(false);
      } catch (err) {
        setError(err.response?.data?.message || "Failed to fetch user profile");
        setLoading(false);
      }
    };

    if (userId) {
      fetchUserProfile();
    } else {
      setError("User ID not found. Please log in again.");
      setLoading(false);
    }
  }, [userId]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <>
    <TeacherHero></TeacherHero>

    </>
  );
};

export default UserProfile;