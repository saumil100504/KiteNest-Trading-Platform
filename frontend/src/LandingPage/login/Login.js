import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const [inputValue, setInputValue] = useState({
    email: "",
    password: "",
  });

  const { email, password } = inputValue;

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setInputValue({
      ...inputValue,
      [name]: value,
    });
  };

  const handleError = (err) =>
    toast.error(err, { position: "bottom-left" });

  const handleSuccess = (msg) =>
    toast.success(msg, { position: "bottom-right" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        "http://localhost:3003/login",
        { ...inputValue },
        { withCredentials: true }
      );

      const { success, message } = data;
      if (success) {
        handleSuccess(message);
        setTimeout(() => {
          window.location.href = "http://localhost:3002"; // Redirects to Dashboard
        }, 1200);
      } else {
        handleError(message);
      }
    } catch (error) {
      console.error(error);
      handleError("Login failed. Please check your credentials.");
    }
  };

  return (
    <div
      style={{
        maxWidth: "420px",
        margin: "60px auto",
        padding: "30px",
        border: "1px solid #e0e0e0",
        borderRadius: "8px",
        boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
        fontFamily: "sans-serif",
      }}
    >
      <h2 style={{ textAlign: "center", marginBottom: "8px", color: "#444" }}>
        Login to Zerodha
      </h2>
      <p
        style={{
          textAlign: "center",
          color: "#777",
          fontSize: "14px",
          marginBottom: "25px",
        }}
      >
        Access your trading and investment accounts.
      </p>

      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: "16px" }}>
          <label
            style={{
              display: "block",
              marginBottom: "6px",
              fontSize: "14px",
              color: "#555",
            }}
          >
            Email
          </label>
          <input
            type="email"
            name="email"
            value={email}
            placeholder="Enter your email"
            onChange={handleOnChange}
            required
            style={{
              width: "100%",
              padding: "10px",
              borderRadius: "4px",
              border: "1px solid #ccc",
              boxSizing: "border-box",
            }}
          />
        </div>

        <div style={{ marginBottom: "20px" }}>
          <label
            style={{
              display: "block",
              marginBottom: "6px",
              fontSize: "14px",
              color: "#555",
            }}
          >
            Password
          </label>
          <input
            type="password"
            name="password"
            value={password}
            placeholder="Enter your password"
            onChange={handleOnChange}
            required
            style={{
              width: "100%",
              padding: "10px",
              borderRadius: "4px",
              border: "1px solid #ccc",
              boxSizing: "border-box",
            }}
          />
        </div>

        <button
          type="submit"
          style={{
            width: "100%",
            padding: "12px",
            backgroundColor: "#387ed1",
            color: "#fff",
            border: "none",
            borderRadius: "4px",
            fontSize: "16px",
            cursor: "pointer",
            fontWeight: "bold",
          }}
        >
          Login
        </button>

        <div
          style={{
            textAlign: "center",
            marginTop: "16px",
            fontSize: "14px",
            color: "#666",
          }}
        >
          Don't have an account?{" "}
          <Link
            to="/signup"
            style={{ color: "#387ed1", textDecoration: "none" }}
          >
            Sign up
          </Link>
        </div>
      </form>
      <ToastContainer />
    </div>
  );
};

export default Login;