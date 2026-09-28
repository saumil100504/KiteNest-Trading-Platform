import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Dashboard from "./Dashboard";
import TopBar from "./TopBar";

const Home = () => {
  const [username, setUsername] = useState("");
  const hasShownToast = useRef(false);

  useEffect(() => {
    const verifyToken = async () => {
      
      const urlParams = new URLSearchParams(window.location.search);
      const urlToken = urlParams.get("token");

      if (urlToken) {
        localStorage.setItem("token", urlToken);
        
        window.history.replaceState({}, document.title, window.location.pathname);
      }

      
      const token = localStorage.getItem("token");

      if (!token) {
        window.location.href = "https://kitenest-frontend.onrender.com/signup";
        return;
      }

      try {
        const { data } = await axios.post(
          "https://kitenest-backend.onrender.com",
          { token },
          { withCredentials: true }
        );

        const { status, user } = data;
        if (status) {
          setUsername(user);
          if (!hasShownToast.current) {
            hasShownToast.current = true;
            toast.success(`Welcome ${user}`, {
              toastId: "unique-welcome-toast",
              position: "top-right",
            });
          }
        } else {
          localStorage.removeItem("token");
          window.location.href = "https://kitenest-frontend.onrender.com/signup";
        }
      } catch (err) {
        console.error(err);
        localStorage.removeItem("token");
        window.location.href = "https://kitenest-frontend.onrender.com/signup";
      }
    };

    verifyToken();
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