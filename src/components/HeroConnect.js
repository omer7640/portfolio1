import React, { useEffect } from "react";
import group from "../assets/Group 2372.png";
import keyboard from "../assets/keyboard.png";
import vector from "../assets/Vector 186.png";
import Aos from "aos";
import "aos/dist/aos.css";
export default function HeroConnect() {
  useEffect(() => {
    Aos.init({ duration: 500 });
  });
  return (
    <div data-Aos="fade-up">
      <section className="connect-section">
        {/* <img className="keyboard" src={keyboard} /> */}
        <div className="mask-connect">
          <div className="connect-left">
            <h2 className="quest">
              Got a project in <span className="designer">mind?</span>
            </h2>
            <img src={vector} className="arrow-down" />
            <img src={group} />
          </div>
          <div className="connect-right">
            <form className="form">
              <label className="l ">Your name</label>
              <input
                className="name-form input"
                type="text"
                placeholder="Name"
              />

              <label className="email">Email</label>
              <input
                className="input email-in"
                type="email"
                placeholder="Email"
              />

              <label className="l">Message</label>
              <textarea
                className="message input"
                rows={6}
                placeholder="Type your message here"
              />
              <button className="submit">
                Send Message{" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-send"
                  viewBox="0 0 16 16"
                >
                  <path d="M15.854.146a.5.5 0 0 1 .11.54l-5.819 14.547a.75.75 0 0 1-1.329.124l-3.178-4.995L.643 7.184a.75.75 0 0 1 .124-1.33L15.314.037a.5.5 0 0 1 .54.11ZM6.636 10.07l2.761 4.338L14.13 2.576zm6.787-8.201L1.591 6.602l4.339 2.76z" />
                </svg>
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
