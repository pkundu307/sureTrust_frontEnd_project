import React from "react";
import { list } from "../../data/Data";
function RecentCard() {
  return (
    <div className="content grid5 mtop">
      {list.map((item, index) => {
        return (
          <div className="box shadow" key={index}>
            <div className="img">
              <img src={item.cover} />
            </div>
            <div className="text">
              <h4>{item.name}</h4>
              <div className="category flex">
                <span
                  style={{
                    background:
                      item.category === "For Sale" ? "#d1f0d9" : "#edd9b4",
                    color: item.category === "For Sale" ? "#31944b" : "#d18b08",
                  }}
                >
                  {item.category}
                </span>
                <p>
                  <i className="fa fa-location-dot"></i>
                  {item.location}
                </p>
              </div>

              <div className="button flex">
                <div>
                  <button className="btn2">{item.price}</button>
                  <label>/sqft</label>
                </div>
                <span>{item.type}</span>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default RecentCard;
//retouch needed