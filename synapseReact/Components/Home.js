import React from "react";
import HomeBackground from "../Assets/home-banner-background.png";
import HomeImage from "../Assets/home-banner-image.png";
import Navbar from "./Nav";
import { FiArrowRight } from "react-icons/fi";

const Home = () => {
  return (
    <div className="home-section">
      <Navbar />
      <div className="home">
        <div className="home-img1">
          <img src={HomeBackground} alt="" />
        </div>
        <div className="home-text">
          <h1 className="heading">
            Your Favourite Food Delivered Hot & Fresh
          </h1>
          <p className="text">
            Healthy switcher chefs do all the prep work, like peeding, chopping
            & marinating, so you can cook a fresh food.
          </p>
          <button className="button2">
            Order Now <FiArrowRight />{" "}
          </button>
        </div>
        <div className="home-img2">
          <img src={HomeImage} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Home;