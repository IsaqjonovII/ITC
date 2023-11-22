import { codeIcon } from "assets";
import c from "./style.module.css";
import { Link } from "react-router-dom";

const Courses = () => {
  return (
    <section className={c.courses}>
      <h1 className={c.course__title}>Kurslar</h1>
      <div className={c.course__cards}>
        <div className={c.course__card}>
          <div className={`${c.card__head} flex`}>
            <h1 className={c.card__title}>Frontend</h1>
            <img className={c.card__icon} src={codeIcon} alt="" />
          </div>

          <div className={c.card__text}>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
          </div>

          <Link className={c.learn__more} to="/courses/:id">
            Batafsil
          </Link>
        </div>
        <div className={c.course__card}>
          <div className={`${c.card__head} flex`}>
            <h1 className={c.card__title}>Frontend</h1>
            <img className={c.card__icon} src={codeIcon} alt="" />
          </div>

          <div className={c.card__text}>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
          </div>

          <Link className={c.learn__more} to="/courses/:id">
            Batafsil
          </Link>
        </div>
        <div className={c.course__card}>
          <div className={`${c.card__head} flex`}>
            <h1 className={c.card__title}>Frontend</h1>
            <img className={c.card__icon} src={codeIcon} alt="" />
          </div>

          <div className={c.card__text}>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
          </div>

          <Link className={c.learn__more} to="/courses/:id">
            Batafsil
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Courses;
