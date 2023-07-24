import React from "react";
import "./style.css";

const Sidebar = ({ isSidebarOpen }) => {
  return (
    <div className={isSidebarOpen ? "sidebar sidebar__active" : "sidebar"}>
      <div className="sidebar__links">
        <li className="sidebar__link">Asosiy</li>
        <li className="sidebar__link">Kurslar</li>
        <li className="sidebar__link">O'qituvchilar</li>
        <li className="sidebar__link">Filiallar</li>
        <li className="sidebar__link">
          <button className="contact__btn">Kontaktlar</button>
        </li>
      </div>
    </div>
  );
};

export default Sidebar;
