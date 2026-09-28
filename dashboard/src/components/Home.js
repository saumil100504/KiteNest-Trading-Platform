import React, { useEffect, useState, useRef } from "react";
import { useCookies } from "react-cookie";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Dashboard from "./Dashboard";
import TopBar from "./TopBar";

const Home = () => {
  const [cookies, , removeCookie] = useCookies(["token"]);
  const [username, setUsername] = useState("");
  const hasShownToast = useRef(false);

  useEffect(() => {
    const verifyCookie = async () => {
      if (!cookies.token) {
        window.location.href = "http://localhost:3000/signup";
        return;
      }

      try {
        const { data } = await axios.post(
          "http://localhost:3003",
          {},
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
          removeCookie("token", { path: "/" });
          window.location.href = "http://localhost:3000/signup";
        }
      } catch (err) {
        console.error(err);
        removeCookie("token", { path: "/" });
        window.location.href = "http://localhost:3000/signup";
      }
    };

    verifyCookie();
  }, [cookies, removeCookie]);

  const handleLogout = () => {
    removeCookie("token", { path: "/" });
    window.location.href = "http://localhost:3000/login";
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