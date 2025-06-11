import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./SignUp.css";
import { FaUser, FaLock, FaEnvelope } from "react-icons/fa";

function SignUp() {
  const [formData, setFormData] = useState({ name: "", email: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Store data temporarily (localStorage for now)
    localStorage.setItem("user", JSON.stringify(formData));
    alert("Signup successful!");
    navigate("/login");
  };

  return (
    <div className="signup-container">
      <form className="signup-form" onSubmit={handleSubmit}>
        <h2>Create Account</h2>
        <div className="input-group">
          <FaUser />
          <input type="text" name="name" placeholder="Full Name" onChange={handleChange} required />
        </div>
        <div className="input-group">
          <FaEnvelope />
          <input type="email" name="email" placeholder="Email" onChange={handleChange} required />
        </div>
        <div className="input-group">
          <FaLock />
          <input type="password" name="password" placeholder="Password" onChange={handleChange} required />
        </div>
        <button type="submit" className="signup-btn">Sign Up</button>
        <p>Already have an account? <a href="/login">Login here</a></p>
      </form>
    </div>
  );
}

export default SignUp;
