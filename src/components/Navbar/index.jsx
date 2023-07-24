import React from "react";
import "./style.css";
import BarsIcon from "./../BarsIcon/index";

const Navbar = ({ isSidebarOpen, setIsSidebarOpen }) => {
  return (
    <header className="header flex">
      <div className="header__logo">IT Center</div>

      <nav className="header__menu flex">
        <ul className="menu__wrp flex">
          <li className="menu__item">Asosiy</li>
          <li className="menu__item">Kurslar</li>
          <li className="menu__item">O'qituvchilar</li>
          <li className="menu__item">Filiallar</li>
          <li className="menu__item">
            <button className="contact__btn">Kontaktlar</button>
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
