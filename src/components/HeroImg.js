import Beg from "../assets/Beg.jpg";
import React, { useEffect, useRef } from "react";
import doodle1 from "../assets/doodle1.png";
import sitting from "../assets/sitting.png";
import resume from "../pdfs/resume.pdf";
import Aos from "aos";
import "aos/dist/aos.css";
import { duration } from "@material-ui/core";
export default function HeroImg({ handleClick }) {
  // const ref = useRef(null);
  // const handleClick = () => {
  //   ref.current?.scrollIntoView({ behaviour: "smooth" });
  // };
  useEffect(() => {
    Aos.init({ duration: 20 });
  });
  return (
    <div data-aos="fade-up">
      <section className="hero-section">
        <div className="mask">
          <div className="hero-left">
            <div className="arrow-andcon">
              <img className="arrow1" src={Beg} />
              {/* <h2 className="main-heading">
                CREATIVE UI <span className="designer">DESIGNER</span>
              </h2> */}

              <h2 className="main-heading">
                Creative UI
                <div class="roller">
                  <span className="designer" id="rolltext">
                    DESIGNER
                    <br />
                    DEVELOPER
                    <br />
                    Curiosity
                  </span>
                </div>
              </h2>
            </div>
            <button onClick={handleClick} className="btn btn1 button">
              Projects
            </button>
            <a href={resume} target="_blank">
              <button className="btn btn2 button">
                Download CV
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-download"
                  viewBox="0 0 16 16"
                >
                  <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5" />
                  <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708z" />
                </svg>
              </button>
            </a>
          </div>
          <div className="hero-right">
            <img className="sitting" src={sitting} />
            <img className="doodle1" src={doodle1} />
          </div>
        </div>
      </section>
    </div>
  );
}
