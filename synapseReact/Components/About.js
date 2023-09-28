import React from "react";
import AboutBackground from "../Assets/about-background.png";
import AboutImage from "../Assets/about-background-image.png";

const About = () => {
  return (
    <div className="about-section">
      <div className="img1">
        <img src={AboutBackground}></img>
      </div>
      <div className="img2">
        <img src={AboutImage}></img>
      </div>
      <div className="content">
        <p className="smallheading">About</p>
        <h1 className="heading">
          Food Is An Important Part Of A Balanced Diet
        </h1>
        <p className="text">
          Lorem ipsum dolor sit amet consectetur. Non tincidunt magna non et
          elit. Dolor turpis molestie dui magnis facilisis at fringilla quam.
        </p>
        <p className="text">
          Non tincidunt magna non et elit. Dolor turpis molestie dui magnis
          facilisis at fringilla quam.
        </p>
        <div className="button2">
          <button>Learn More</button>
        </div>
      </div>
    </div>
  );
};

export default About;