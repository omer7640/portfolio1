import React from "react";
import github from "../assets/github.png";
import js from "../assets/js.png";
import world from "../assets/world.png";
import design from "../assets/design.png";
import debug from "../assets/debug.png";
import ui from "../assets/ui.png";
import mind from "../assets/mind.png";
import social from "../assets/social.png";
import physics from "../assets/physics.png";
import html from "../assets/html.png";
import boot3 from "../assets/boot3.png";
import node from "../assets/node.png";
import figma from "../assets/figma.png";

export function Skills() {
  return (
    <div>
      <section className="skill-section">
        <div className="skill-set">
          <h2 className="skill-heading designer">Services</h2>
          <div className="skill-container">
            <div className="skill-card">
              <div class="card" style={{ width: " 18rem" }}>
                <div class="card-body">
                  <img className="img-icon" src={world} />

                  <h6 class="card-subtitle mb-2 text-body-secondary">
                    Web Development
                  </h6>
                  <p class="card-text">
                    I specialize in crafting high-performance, scalable web
                    applications with a deep mastery of modern frameworks and
                    technologies.
                  </p>
                </div>
              </div>
              <div class="card" style={{ width: " 18rem" }}>
                <div class="card-body">
                  <img className="img-icon" src={ui} />
                  <h6 class="card-subtitle mb-2 text-body-secondary">
                    Web Designing
                  </h6>
                  <p class="card-text">
                    I am proficient in web designing, with a strong ability to
                    create visually appealing and user-friendly websites that
                    enhance the user experience.
                  </p>
                </div>
              </div>{" "}
              <div class="card" style={{ width: " 18rem" }}>
                <div class="card-body">
                  <img className="img-icon" src={github} />

                  <h6 class="card-subtitle mb-2 text-body-secondary">
                    Git Version Control
                  </h6>
                  <p class="card-text">
                    I have strong experience and good practice in using Git for
                    version control.
                  </p>
                </div>
              </div>{" "}
              <div class="card" style={{ width: " 18rem" }}>
                <div class="card-body">
                  <img className="img-icon" src={design} />
                  <h6 class="card-subtitle mb-2 text-body-secondary">UI/UX</h6>
                  <p class="card-text">
                    I excel at creating intuitive and engaging user interfaces
                    that enhance the overall user experience.
                  </p>
                </div>
              </div>
              <div class="card" style={{ width: " 18rem" }}>
                <div class="card-body">
                  <img className="img-icon" src={debug} />
                  <h6 class="card-subtitle mb-2 text-body-secondary">
                    Debugging
                  </h6>
                  <p class="card-text">
                    I have a proven knack for identifying and resolving complex
                    issues in code efficiently.
                  </p>
                </div>
              </div>{" "}
              <div class="card" style={{ width: " 18rem" }}>
                <div class="card-body">
                  <img className="img-icon" src={mind} />
                  <h6 class="card-subtitle mb-2 text-body-secondary">
                    Problem Solving
                  </h6>
                  <p class="card-text">
                    I have a knack for swiftly overcoming hurdles and optimizing
                    outcomes in software development endeavont.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <hr></hr> */}
        <div className="skills-tools">
          <h2 className="tools-heading designer">Skills-set and Tools</h2>
          <div className="tool-container">
            <div className="card2">
              <img className="tools html" src={html} />
              <img className="tools" src={social} />
              <img className="tools js" src={js} />
              <img className="tools" src={boot3} />
              <img className="tools" src={node} />
              <img className="tools react" src={physics} />
              {/* <div className="tools">
                <img className="pic-icon" src={html} />
                <p>HTML5</p>
              </div>
            </div>
            <div className="tools">
              <img className="pic-icon" src={social} />
              <p>HTML5</p>
            </div>{" "}
            <div className="tools">
              <img className="pic-icon" src={js} />
              <p>HTML5</p>
            </div>{" "}
            <div className="tools">
              <img className="pic-icon" src={boot} />
              <p>HTML5</p>
            </div>{" "}
            <div className="tools">
              <img className="pic-icon" src={node} />
              <p>HTML5</p>
            </div>{" "}
            <div className="tools">
              <img className="pic-icon" src={physics} />
              <p>HTML5</p>
*/}{" "}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
