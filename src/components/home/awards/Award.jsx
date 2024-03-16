import React from "react";
import "./award.css";
import { awards } from "../../data/Data";
import Heading from "../../common/Heading";
function Award() {
  return (
    <section className="awards padding">
      <div className="container">
        <Heading
          title="Over 1,24,000+ Happy User Bieng With Us Still They Love Our Services"
          subtile="Our Awards"
        />
        <div className="content grid4 mtop">
          {awards.map((val, index) => (
            <div className="box" key={index}>
              <div className="icon">
                <span>{val.icon}</span>
              </div>
              <h1>{val.num}</h1>
              <p>{val.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Award;
