import React, { forwardRef, useEffect } from "react";
import frame from "../assets/Frame.png";
import todo2 from "../assets/todo2.png";
import weather from "../assets/weather.jpg";
import movie from "../assets/movie2.png";
import Aos from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";

// export default function HeroProject(props, ref) {
// return (
function HeroProject(props, ref) {
  useEffect(() => {
    Aos.init({ duration: 500 });
  });
  return (
    <div data-aos="fade-up">
      <div className="project-section">
        <div className="mask-project">
          <div className="pro-content">
            <h3 ref={ref} className="recent-work">
              My Recent <span className="designer">Works</span>
            </h3>
          </div>
          <div className="project-boxes">
            <Link to="https://project-weather-app4.netlify.app" target="_blank">
              <div class="card text-bg-dark">
                <img src={frame} class="card-img" alt="..." />
                <div class="card-img-overlay">
                  {/* <h4>Weather App</h4> */}
                  <img src={weather} class="card-img2 weather" />
                  {/* <p class="card-text">
                  <small>Last updated 3 mins ago</small>
                </p> */}
                </div>
              </div>
            </Link>
            <Link to="https://taskmate-todolist.netlify.app/" target="_blank">
              <div class="card text-bg-dark">
                <img src={frame} class="card-img" alt="..." />
                <div class="card-img-overlay">
                  <img src={todo2} className="card-img2" />
                </div>
              </div>
            </Link>
            <Link
              to="https://storied-florentine-05b132.netlify.app/"
              target="_blank"
            >
              <div class="card text-bg-dark">
                <img src={frame} class="card-img" alt="..." />
                <div class="card-img-overlay">
                  <img src={movie} class="card-img2 movie" />
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
export default forwardRef(HeroProject);
