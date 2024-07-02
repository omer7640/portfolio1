import React from "react";
import about from "../assets/about.gif";
import resume from "../pdfs/resume.pdf";

export function About() {
  return (
    <div>
      <section className="introduction-section">
        <div className="mask-intro">
          <div className="hero-left-about">
            <h4 className="about-heading">
              About <span className="designer">ME</span>
            </h4>
            <p className="about-para">
              Hello there! 👋 I'm
              <span className="designer umer2">Umer Hameed</span>, a passionate
              frontend developer with a keen eye for design and a love for
              crafting delightful user experiences.I've had the opportunity to
              work on a diverse range of projects, from small business websites
              to large-scale web applications.
            </p>
            <p className="about-para">
              My journey in web development began with a fascination for
              technology and a desire to create meaningful connections through
              code. Over the years, I've honed my skills in HTML, CSS,
              JavaScript and React JS
            </p>
            <a href={resume} target="_blank">
              <button className="button btn download-btn">Download CV</button>
            </a>
          </div>
          <div className="hero-right-about">
            <img className="gif" src={about} />
          </div>
        </div>
      </section>
    </div>
  );
}
