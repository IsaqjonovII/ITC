import { useEffect, useRef } from "react";
import ParticlesJSX from "../../components/Particles";
import "./style.css";
import Typed from "typed.js";
import { Link } from "react-router-dom";

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
      <ParticlesJSX />
      <div className="main__content">
        <div className="content__text">
          <span ref={el}></span> <br /> <span>IT Centerda</span> o'rganing
          <br />
          <Link to="/contact">
            <button className="connect__btn">Biz bilan bog'laning</button>
          </Link>
        </div>
      </div>
    </main>
  );
};

export default Home;
