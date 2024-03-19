import React from "react";
import Heading from "../../common/Heading";
import { team } from "../../data/Data";
import "./contact.css"

function Contact() {
  return (
    <>
      <section className="team background">
        <div className="container">
          <Heading
            title="Our Featured Agents"
            subtile="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
          />
          <div className="content grid3 mtop">
            {team.map((value, index) => (
              <div className="box" key={index}>
                <button>{value.list} listing</button>
                <div className="details">
                  <div className="img">
                    <img src={value.cover} alt="" />
                    <i className="fa-solid fa-circle-check"></i>
                  </div>
                  <i className="fa-solid fa-location-dot"></i>
                  <label htmlFor="">{value.address}</label>
                  <h3>{value.name}</h3>
                  <ul>
                  {value.icon.map((icon,index)=>(
                    <li key={index}>{icon}</li>
                  ))}
                  </ul>
                  <div className="button flex">
                  <button className="btn"><i className="fa fa-phone"></i></button>
                  <button className="btn"><i className="fa fa-envelope"></i></button>

                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;
