import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import c from "./style.module.css";
import { coursesData } from "static";
import { backendBg } from "assets";

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
    <div className={`${c.course__wrp} flex`}>
      <section>
        <h1 className={c.course__title}>{courseInfo?.title}</h1>
        <p>{courseInfo?.learn_more}</p>
      </section>

      {/* <aside> */}
      <img
        //   src={courseInfo?.banner}
        src={backendBg}
        alt={courseInfo?.title + " course banner"}
      />
      {/* </aside> */}
    </div>
  );
};

export default Course;
