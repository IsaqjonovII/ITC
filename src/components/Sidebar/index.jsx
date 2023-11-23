import { Link } from "react-router-dom";
import "./style.css";
import { sidebarRoutes } from "routes";

const Sidebar = ({ isSidebarOpen }) => {
  return (
    <div className={isSidebarOpen ? "sidebar sidebar__active" : "sidebar"}>
      <div className="sidebar__links">
        {sidebarRoutes.map(({ id, title, path }) => (
          <li key={id} className="sidebar__link">
            <Link className="sidebar__link" to={path}>{title}</Link>
          </li>
        ))}
        <Link className="sidebar__link" to="tel:+998337505151">
          <button className="contact__btn">+998 33 750 51 51</button>
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
