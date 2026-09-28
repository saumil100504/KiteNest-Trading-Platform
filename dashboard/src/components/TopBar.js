import React from "react";
import Menu from "./Menu";

const TopBar = ({ username, onLogout }) => {
  return (
    <div className="topbar-container">
      <div className="indices-container">
        <div className="nifty">
          <p className="index">NIFTY 50</p>
          <p className="index-points">{100.2} </p>
          <p className="percent"> </p>
        </div>
        <div className="sensex">
          <p className="index">SENSEX</p>
          <p className="index-points">{100.2}</p>
          <p className="percent"></p>
        </div>
      </div>

      <Menu />

      {/* User profile & Logout button */}
      <div style={{ display: "flex", alignItems: "center", gap: "12px", marginRight: "20px" }}>
        <span style={{ fontSize: "14px", color: "#666", fontWeight: "500" }}>
          {username || "User"}
        </span>
        <button
          onClick={onLogout}
          style={{
            padding: "5px 12px",
            fontSize: "12px",
            backgroundColor: "#ff5722",
            color: "#fff",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
            fontWeight: "bold",
          }}
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default TopBar;