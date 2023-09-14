import React from "react";
import "./style.css";
import { sidebarRoutes } from "../../routes";
import { Link } from "react-router-dom";

const Sidebar = ({ isSidebarOpen }) => {
  return (
    <div className={isSidebarOpen ? "sidebar sidebar__active" : "sidebar"}>
      <div className="sidebar__links">
        {sidebarRoutes.map(({ id, title, path }) => (
          <li key={id} className="sidebar__link">
            <Link className="sidebar__link" to={path}>{title}</Link>
          </li>
        ))}
        <li className="sidebar__link">
          <button className="contact__btn">Kontaktlar</button>
        </li>
      </div>
    </div>
  );
};

export default Sidebar;
