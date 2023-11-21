import Typed from "typed.js";
import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { BG } from "../../assets";
import "./style.css";

const Home = () => {
  const el = useRef(null);
  useEffect(() => {
    const typedText = new Typed(el.current, {
      strings: ["Kasblarni", "Dasturlashni"],
      typeSpeed: 80,
      backSpeed: 120,
      loop: true,
    });

    return () => typedText.destroy();
  }, []);
  return (
    <main className="main">
      <div className="main__content">
        <div className="content__text">
          <span ref={el}></span> <br /> <span>IT CENTERda</span> o&apos;rganing
          <br />
          <Link to="/contact">
            <button className="connect__btn">Biz bilan bog&apos;laning</button>
          </Link>
        </div>
      </div>
      <div className="home__banner">
        <img src={BG} alt="" />
      </div>
    </main>
  );
};

export default Home;
