import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="text-center">
      <div className="text-xl font-bold">Welcome to the task solution.</div>
      <Link to={"/dashboard"}>
        <button className="bg-black text-white p-3 text-lg">
          Go to the Dashboard.
        </button>
      </Link>
    </div>
  );
};

export default Home;
