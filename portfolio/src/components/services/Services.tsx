import React from "react";
import "./services.css";
import { BiCheck } from "react-icons/bi";

function Services() {
  const UIUXList: any[] = [0, 1, 2, 3, 4];

  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>UI/UX Design</h3>
          </div>
          <ul className="service__list">
            {UIUXList.map((item) => (
              <li>
                <BiCheck className="service__list-icon" />
                <p> Lorem Ipsum</p>
              </li>
            ))}
          </ul>
        </article>
        <article className="service">
          <div className="service__head">
            <h3>Web Development</h3>
          </div>
          <ul className="service__list">
            {UIUXList.map((item) => (
              <li>
                <BiCheck className="service__list-icon" />
                <p> Lorem Ipsum</p>
              </li>
            ))}
          </ul>
        </article>
        <article className="service">
          <div className="service__head">
            <h3>Content Creation</h3>
          </div>
          <ul className="service__list">
            {UIUXList.map((item) => (
              <li>
                <BiCheck className="service__list-icon" />
                <p> Lorem Ipsum</p>
              </li>
            ))}
          </ul>
        </article>
      </div>
    </section>
  );
}

export default Services;
