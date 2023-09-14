import React from "react";
import "./style.css";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="pagenotfound__banner">
      <div className="label__404 flex">
        <div className="four__404">4</div>
        <div className="four__404">0</div>
        <div className="four__404">4</div>
      </div>
      <div className="content__404">
        <h1 className="title__404">iyyy...</h1>
        <h1 className="subtitle__404">Nimadur bo'ldii...</h1>
        <Link className="back__link" to="/">
          Asosiy sahifaga qaytish
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
