import React from "react";
import Hero from "./hero/Hero";
import Featured from "./featured/Featured";
import Recent from "./recent/Recent";
import Award from "./awards/Award";
import Location from "./location/Location";
import Contact from "./contact/Contact";
import Price from "./price/Price";

function Home() {
  return (
    <div>
      <Hero />
      <Featured/>
      <Recent/>
      <Award/>
      <Location/>
      <Contact/>
      <Price/>
    </div>
  );
}

export default Home;
