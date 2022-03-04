import React from "react";
import CTA from "./CTA";
import "./header.css";
import HeaderSocials from "./HeaderSocials";

function Header() {
  return (
    <>
      <header>
        <div className="container header__container">
          <h5>Hello I'm</h5>
          <h1>Yves Bulckens</h1>
          <h5 className="text-light">Trainee</h5>
          <CTA />

          <HeaderSocials />

          <div className="me">
            <img src="" alt="" />
          </div>

          <a href="#contact" className="scroll__Down">
            Scroll Down
          </a>
        </div>
      </header>
    </>
  );
}

export default Header;
