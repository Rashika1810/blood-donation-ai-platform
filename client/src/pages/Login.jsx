import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Mail, Lock, HeartPulse } from "lucide-react";
import api from "../services/api";

import BloodLogo from "../components/BloodLogo";

import "../styles/Login.css";

export const Login = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await api.post(
        "/auth/login",
        formData
      );

      localStorage.setItem(
        "token",
        res.data.token
      );

      navigate("/dashboard");
    } catch (error) {
      alert("Login failed");
    }
  };

  return (
    <div className="login-page">

      <div className="left-section">

        <BloodLogo size={150} />

        <h1>Blood AI</h1>

        <p>
          AI Powered Blood Donation Platform
        </p>

        <div className="tagline">

          <HeartPulse size={22} />

          <span>
            Saving lives through intelligence
          </span>

        </div>

      </div>

      <div className="right-section">

        <div className="login-card">

          <h2>Welcome Back</h2>

          <p>
            Login to continue
          </p>

          <form onSubmit={handleSubmit}>

            <div className="input-box">

              <Mail size={20} />

              <input
                type="email"
                name="email"
                placeholder="Email"
                onChange={handleChange}
              />

            </div>

            <div className="input-box">

              <Lock size={20} />

              <input
                type="password"
                name="password"
                placeholder="Password"
                onChange={handleChange}
              />

            </div>

            <button>
              Login
            </button>

          </form>

          <div className="signup-text">
            New user?
            <span>
              Create Account
            </span>
          </div>

        </div>

      </div>

    </div>
  );
};