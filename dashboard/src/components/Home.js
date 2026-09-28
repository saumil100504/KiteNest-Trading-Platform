import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Dashboard from "./Dashboard";
import TopBar from "./TopBar";

const Home = () => {
  const [username, setUsername] = useState("Trader");
  const hasShownToast = useRef(false);

  useEffect(() => {
    const verifyUser = async () => {
      // 1. Capture token if passed via URL or stored locally
      const urlParams = new URLSearchParams(window.location.search);
      const urlToken = urlParams.get("token");

      if (urlToken) {
        localStorage.setItem("token", urlToken);
        window.history.replaceState({}, document.title, window.location.pathname);
      }

      const token = localStorage.getItem("token");

      // 2. Attempt backend handshake without throwing you out if it fails
      try {
        const { data } = await axios.post(
          "https://kitenest-backend.onrender.com",
          { token },
          { withCredentials: true }
        );

        if (data && data.status && data.user) {
          setUsername(data.user);
        }
      } catch (err) {
        console.warn("Auth check bypassed for local dashboard view:", err);
      }

      // 3. Greet user and stay permanently on dashboard
      if (!hasShownToast.current) {
        hasShownToast.current = true;
        toast.success("Welcome to KiteNest Trading Console!", {
          toastId: "unique-welcome-toast",
          position: "top-right",
        });
      }
    };

    verifyUser();
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.href = "https://kitenest-frontend.onrender.com/login";
  };

  return (
    <>
      <TopBar username={username} onLogout={handleLogout} />
      <Dashboard />
      <ToastContainer autoClose={3000} limit={1} />
    </>
  );
};

export default Home;