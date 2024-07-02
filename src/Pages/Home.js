import React, { useRef } from "react";
import HeroImg from "../components/HeroImg";
import HeroAbout from "../components/HeroAbout";
import HeroProject from "../components/HeroProject";
import HeroConnect from "../components/HeroConnect";
export function Home() {
  const ref = useRef(null);
  const handleClick = () => {
    ref.current?.scrollIntoView({ behaviour: "smooth" });
  };
  return (
    <div>
      <HeroImg handleClick={handleClick} />
      <HeroAbout />
      <hr></hr>
      <HeroProject ref={ref} />
      <HeroConnect />
    </div>
  );
}
