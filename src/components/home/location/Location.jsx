import React from "react";
import Heading from "../../common/Heading";
import { location } from "../../data/Data";

function Location() {
  return (
    <div className="location padding">
      <div className="container">
        <Heading
          title="Explore By Location"
          subtile="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
        />
        <div className="content grid3 mtop">
        {location.map((item,index)=>(
            <div className="box" key={index}>
            <img src={item.cover} alt="" />
            <div className="overlay">
            <h5>{item.name}</h5>
            <p>
            <label htmlFor="">{item.Villas}</label>

            <label htmlFor="">{item.Offices}</label>

            <label htmlFor="">{item.Apartments}</label>
            </p>
            </div>
            </div>
        ))}
        </div>
      </div>
    </div>
  );
}

export default Location;
