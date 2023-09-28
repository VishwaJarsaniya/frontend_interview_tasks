import React, { useState } from "react";
import Logo from "../Assets/Logo.svg";
import { BsCart2 } from "react-icons/bs";

const Navbar = () => {
  return (
    <nav>
      <div className="logo">
        <img src={Logo} alt="" />
      </div>
      <div className="links">
        <a href="">Home</a>
        <a href="">About</a>
        <a href="">Testimonials</a>
        <a href="">Contact</a>
        <a href="">
          <BsCart2 className="navbar-cart" />
        </a>
        <button className="button1">Booking Now</button>
      </div>
    </nav>
  );
};

export default Navbar;