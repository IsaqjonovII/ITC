/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import "./style.css";
import BarsIcon from "./../BarsIcon/index";
import { sidebarRoutes } from "./../../routes/index";

const Navbar = ({ isSidebarOpen, setIsSidebarOpen }) => {
  return (
    <header className="header flex">
      <Link to="/">
        <h1 className="header__logo">IT Center</h1>
      </Link>

      <nav className="header__menu flex">
        <ul className="menu__wrp flex">
          {sidebarRoutes.map(({ id, title, path }) => (
            <li key={id} className="menu__item">
              <Link className="menu__item__link" to={path}>
                {title}
              </Link>
            </li>
          ))}
          <li className="menu__item">
            <Link to="/contact">
              <button className="contact__btn">Kontaktlar</button>
            </Link>
          </li>
        </ul>
      </nav>

      <BarsIcon
        isSidebarOpen={isSidebarOpen}
        setIsSidebarOpen={setIsSidebarOpen}
      />
    </header>
  );
};

export default Navbar;
