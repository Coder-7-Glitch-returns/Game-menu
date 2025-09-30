import React from "react";
import { Link } from "react-router-dom";

function Greetings() {
  return (
    <div className="relative flex items-center justify-center h-screen overflow-hidden">
      {/* Floating Shapes */}
      <div className="absolute top-20 left-24 w-40 h-40 bg-purple-600/40 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-28 right-28 w-48 h-48 bg-pink-500/30 rounded-full blur-3xl animate-bounce"></div>
      <div className="absolute top-1/2 left-1/3 w-28 h-28 bg-yellow-400/30 rounded-full blur-2xl animate-spin-slow"></div>

      {/* Content */}
      <div className="relative z-10 text-center space-y-10">
        <h1 className="text-6xl font-extrabold tracking-wide drop-shadow-lg font-heading">
          Welcome Back{" "}
          <span className="bg-gradient-to-r from-yellow-400 via-orange-500 to-red-600 bg-clip-text text-transparent animate-gradient">
            PC Game Store
          </span>
        </h1>
        <Link to={"/auth"}>
          <button
            type="button"
            className="px-8 py-3 text-lg font-bold rounded-xl bg-gradient-to-r from-yellow-400 via-orange-500 to-red-600 text-black
            shadow-[0_0_20px_rgba(255,165,0,0.8)] hover:shadow-[0_0_40px_rgba(255,140,0,1)] transform hover:scale-105 transition duration-300 ease-in-out
            font-navigation"
          >
            Continue
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Greetings;
