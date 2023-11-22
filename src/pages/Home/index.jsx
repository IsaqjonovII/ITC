import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Typed from "typed.js";
import { BG, phoneIcon } from "assets";
import "./style.css";

const Home = () => {
  const el = useRef(null);
  useEffect(() => {
    const typedText = new Typed(el.current, {
      strings: ["Kasblarni", "Dasturlashni"],
      typeSpeed: 120,
      backSpeed: 40,
      loop: true,
    });

    return () => typedText.destroy();
  }, []);
  return (
    <div>
      <main className="main">
        <div className="main__content">
          <div className="content__text">
            <span ref={el}></span> <br /> <span>IT CENTERda</span>{" "}
            o&apos;rganing
            <br />
            <Link to="tel:+998337505151">
              <button className="connect__btn">
                Bog&apos;lanish
                <img src={phoneIcon} alt="" />
              </button>
            </Link>
          </div>
        </div>
        <div className="home__banner">
          <img src={BG} alt="" />
        </div>
      </main>
      <section>

      </section>
    </div>
  );
};

export default Home;
