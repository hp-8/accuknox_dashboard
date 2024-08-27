import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 animate-fadeIn">
      <div className="text-4xl font-extrabold text-gray-800 mb-4 animate-slideIn">
        Welcome to the Task Solution
      </div>
      <div className="text-gray-600 mb-8 text-lg animate-slideIn delay-150">
        Created by Harsh Patadia
      </div>
      <Link to="/dashboard">
        <button className="bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg shadow-md hover:bg-blue-700 transition-transform duration-300 ease-in-out transform hover:scale-105">
          Go to the Dashboard
        </button>
      </Link>
    </div>
  );
};

export default Home;