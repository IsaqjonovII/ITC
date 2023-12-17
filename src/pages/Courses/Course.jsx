import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import c from "./style.module.css";
import { coursesData } from "static";

const Course = () => {
  const [courseInfo, setCourseInfo] = useState(null);
  const { title } = useParams();
  useEffect(() => {
    const filteredCourse = coursesData.filter(
      (course) => course.title === title
    )[0];
    setCourseInfo(filteredCourse);
  }, [title]);

  return (
    <main className={c.course__wrp}>
      <section className={c.course__content}>
        <h1 className={c.course__title}>{courseInfo?.title}</h1>
        <p className={c.course__period}>
          Kurs davomiligi: <span>{courseInfo?.period}</span>
        </p>
        <hr />
        <p className={c.course__description}>{courseInfo?.learn_more}</p>
        <div className={c.skills__wrp}>
          {courseInfo?.skills.map((skill) => (
            <span key={skill} className={c.skill__text}>
              {skill}
            </span>
          ))}
        </div>
        <div>
          <Link
            className={c.course__register}
            target="_blank"
            rel="noreferrer noopener"
            to="https://forms.gle/jzo6bPgstWhD55PG6"
          >
            Kursda o'qimoqchiman
          </Link>
        </div>
      </section>
      <aside className={c.course__banner}>
        <img src={courseInfo?.banner} alt={courseInfo?.title} />
      </aside>
    </main>
  );
};

export default Course;
