import React from "react";
import "./experience.css";
import { BsPatchCheckFill } from "react-icons/bs";
function Experience() {
  const FrontendList: list[] = [
    {
      item: "HTML",
      experience: "Great",
    },
    {
      item: "CSS",
      experience: "Intermediate",
    },
    {
      item: "Javascript",
      experience: "Great",
    },
    {
      item: "Typescript",
      experience: "Great",
    },
    {
      item: "Angular",
      experience: "Great",
    },
    {
      item: "React",
      experience: "Learning",
    },
  ];
  const BackendList: list[] = [
    {
      item: "NestJS",
      experience: "Great",
    },
    {
      item: "Node JS",
      experience: "Great",
    },
    {
      item: "Mongo DB",
      experience: "Intermediate",
    },
    {
      item: "MySQL",
      experience: "Basic",
    },
    {
      item: ".NET",
      experience: "Basic",
    },
    {
      item: "NextJS",
      experience: "Learning"
    }
  ];
  return (
    <section id="experience">
      <h5>What Skill I Have</h5>
      <h2>My Experience</h2>
      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend Development</h3>
          <div className="experience__content">
            {FrontendList.map((item) => (
              <article className="experience__details">
                <BsPatchCheckFill className="experience__details-icon"/>
                <div>
                  <h4>{item.item}</h4>
                  <small className="text-light">{item.experience}</small>
                </div>
              </article>
            ))}
          </div>
        </div>
        <div className="experience__backend">
          <h3>Backend Development</h3>
          <div className="experience__content">
            {BackendList.map((item) => (
              <article className="experience__details">
                <BsPatchCheckFill className="experience__details-icon"/>
                <div>
                  <h4>{item.item}</h4>
                  <small className="text-light">{item.experience}</small>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;

interface list {
  item: string;
  experience: string;
}
