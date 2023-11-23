/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import "./style.css";
import { sidebarRoutes } from "routes";
import BarsIcon from "components/BarsIcon";

const Navbar = ({ isSidebarOpen, setIsSidebarOpen }) => {
  return (
    <div className="header flex">
      <Link to="/">
        <h1 className="header__logo">ITC</h1>
      </Link>

      <nav className="header__menu flex">
        <ul className="menu__wrp flex">
          {sidebarRoutes.map(({ id, title, path }) => (
            <li key={id} className="menu__item">
              {path.includes("#why") ? (
                <a className="menu__item__link" href={path}>
                  {title}
                </a>
              ) : (
                <Link className="menu__item__link" to={path}>
                  {title}
                </Link>
              )}
            </li>
          ))}
          <li className="menu__item">
            <Link to="tel:+998337505151">
              <button className="contact__btn">+998 33 750 51 51</button>
            </Link>
          </li>
        </ul>
      </nav>

      <BarsIcon
        isSidebarOpen={isSidebarOpen}
        setIsSidebarOpen={setIsSidebarOpen}
      />
    </div>
  );
};

export default Navbar;
