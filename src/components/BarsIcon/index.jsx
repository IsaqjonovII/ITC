import React from "react";
import "./style.css";

const BarsIcon = ({ isSidebarOpen, setIsSidebarOpen }) => {
  
  return (
    <div
      className={isSidebarOpen ? "btn active" : "btn not-active"}
      onClick={() => setIsSidebarOpen(!isSidebarOpen)}
    >
      <span></span>
      <span></span>
      <span></span>
    </div>
  );
};

export default BarsIcon;
