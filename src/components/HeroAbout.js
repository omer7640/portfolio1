import React, { useEffect } from "react";
import doodle2 from "../assets/doodle2.png";
import sleep from "../assets/sleep.png";
import lightbulb from "../assets/lightbulb.png";
import anglebrace from "../assets/angle brace.png";
import vector70 from "../assets/Vector 70.png";
import Aos from "aos";
import "aos/dist/aos.css";
export default function HeroAbout() {
  useEffect(() => {
    Aos.init({ duration: 500 });
  });
  return (
    <div data-aos="fade-up">
      <section className="about-section">
        <div className="mask about-mask">
          <div className="about-left">
            <img className="song" src={vector70} />
            <h2>
              Let me introduce <span className="designer">Myself</span>
            </h2>
            <div className="explaination">
              <img className="bulb" src={lightbulb} />

              <p className="intro-para">
                "My name is <span className="designer umer">Umer hameed</span>,
                my vision for frontend development is to craft seamless,
                user-centric interfaces that transcend expectations, embrace
                inclusivity, and redefine the art of digital interaction."
              </p>
              <p className="intro-para">
                I am fluent in classics like CSS, Javascript and React
              </p>
              <p className="intro-para">
                "As an expert in CSS, JavaScript and React.js, I've woven
                seamless digital experiences. Yet, my expertise is a foundation,
                not a ceiling.. Eager to learn more things like Angular and Vue
                js to become more proficient in frontend development"
              </p>
            </div>
          </div>
          <img className="angle" src={anglebrace} />
          <div className="about-right">
            <img className="sleep" src={sleep} />
            <img className="doodle2" src={doodle2} />
          </div>
        </div>
      </section>
    </div>
  );
}
