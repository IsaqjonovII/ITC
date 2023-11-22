import { Link } from "react-router-dom";
import { coursesData } from "static";
import c from "./style.module.css";

const Courses = () => {
  return (
    <section className={c.courses}>
      <h1 className={c.course__title}>Kurslar</h1>
      <div className={c.course__cards}>
        {coursesData.map(({ id, title, subtitle, icon }) => (
          <div className={c.course__card} key={id}>
            <div className="flex">
              <h1 className={c.card__title}>{title}</h1>
              <img className={c.card__icon} src={icon} alt="" />
            </div>

            <div className={c.card__text}>
              <p>{subtitle}. </p>
            </div>

            <Link className={`${c.learn__more} flex`} to="/courses/:id">
              Batafsil
              <svg
                width="30px"
                height="30px"
                viewBox="0 0 24 24"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <path
                    d="M7 17L17 7M17 7H8M17 7V16"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>{" "}
                </g>
              </svg>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Courses;
