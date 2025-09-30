import React, { useState } from "react";
import { LuEye, LuEyeClosed } from "react-icons/lu";
import { useNavigate } from "react-router-dom";

function Authentication() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState("");
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    // Only update if the field name exists in formData
    if (name in formData) {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage("");
    setMessageType("");

    if (!formData.email || !formData.password) {
      setMessage("All fields are required");
      setMessageType("error");
      return;
    }

    // In a real application, you would perform an API call here.
    // Assuming the login is successful for this example:
    setMessage("Login Successful. Redirecting...");
    setMessageType("success");

    setTimeout(() => {
      navigate("/main/");
    }, 2000);
  };

  return (
    <div className="relative flex items-center justify-center h-screen overflow-hidden">
      {/* Floating Shapes */}
      <div className="absolute top-20 left-24 w-40 h-40 bg-purple-600/40 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-28 right-28 w-48 h-48 bg-pink-500/30 rounded-full blur-3xl animate-bounce"></div>
      <div className="absolute top-1/2 left-1/3 w-28 h-28 bg-yellow-400/30 rounded-full blur-2xl animate-spin-slow"></div>
      <div className="w-full max-w-md bg-black/40 backdrop-blur-xl rounded-2xl shadow-2xl p-8 space-y-6 border border-white/10 relative">
        {/* Heading */}
        <h2 className="text-3xl font-heading font-bold text-center text-white">
          Login to{" "}
          <span className="bg-gradient-to-r from-yellow-400 via-orange-500 to-red-600 bg-clip-text text-transparent">
            Game Menu
          </span>
        </h2>

        {/* Form */}
        <form className="space-y-5" onSubmit={handleSubmit}>
          {messageType === "error" && (
            <div className="p-3 text-center bg-red-100 rounded text-red-600">
              {message}
            </div>
          )}
          {messageType === "success" && (
            <div className="p-3 text-center bg-green-100 rounded text-green-600">
              {message}
            </div>
          )}
          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-sm font-navigation text-gray-300 mb-1">
              Email
            </label>
            <input
              id="email"
              type="email"
              name="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 rounded-lg bg-gray-900/60 text-white font-paragraph border border-gray-700 focus:ring-2
              focus:ring-orange-500 outline-none transition-colors"
              onChange={handleInputChange}
              value={formData.email}
            />
          </div>

          {/* Password */}
          <div className="relative">
            <label htmlFor="password" className="block text-sm font-navigation text-gray-300 mb-1">
              Password
            </label>
            <input
              id="password"
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Enter your password"
              className="w-full px-4 py-2 pr-10 rounded-lg bg-gray-900/60 text-white font-paragraph border border-gray-700 focus:ring-2 focus:ring-orange-500 outline-none transition-colors"
              onChange={handleInputChange}
              value={formData.password}
            />

            {/* Toggle Password Visibility */}
            <div
              className="absolute right-3 top-9 cursor-pointer text-gray-400 hover:text-white transition"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <LuEyeClosed size={20} /> : <LuEye size={20} />}
            </div>
          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-full py-3 font-navigation font-bold rounded-lg bg-gradient-to-r from-yellow-400 via-orange-500 to-red-600 text-black
            shadow-[0_0_15px_rgba(255,140,0,0.8)] hover:shadow-[0_0_30px_rgba(255,140,0,1)] transform hover:scale-105 transition duration-300"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default Authentication;