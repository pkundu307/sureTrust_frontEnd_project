import React from "react";
import "./featured.css";
import Heading from "../../common/Heading";
import FeaturedCard from "./FeaturedCard";
function Featured() {
  return (
    <>
      <section className="featured background">
        <div className="container">
          <Heading
            title="Featured Property Types"
            subtile="Find All Type of Property."
          />
          <FeaturedCard />
        </div>
      </section>
    </>
  );
}

export default Featured;
