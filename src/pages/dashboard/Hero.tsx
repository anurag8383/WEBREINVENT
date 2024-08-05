import React from "react";
import './Hero.css'
import { HiLocationMarker } from "react-icons/hi";
import CountUp from 'react-countup';

const Hero: React.FC = () => {
  return (
    <section className="hero-wrapper">
      <div className="paddings innerWidth flexCenter hero-container">
        <div className="flexColStart hero-left">
          <div className="hero-title">
            <div className="orange-circle" />
            <h1>
              Discover
              <br />
              Most Suitable
              <br />
              Services
            </h1>
          </div>

          <div className="flexColStart hero-des">
            <span>Find a variety of Solutions that suits you perfectly.</span>
            <span>
              Forget about all difficulties to find your problem a solution
            </span>
          </div>
          <div className="flexCenter search-bar">
            <HiLocationMarker color="var(--blue)" size={25} />
            <input type="text" />
            <button className="button">Search</button>
          </div>

          <div className="flexCenter stats">
            <div className="flexColStart stat">
              <span>
                <CountUp start={2000} end={6000} duration={6} />
                <span>+</span>
              </span>
              <span>Happy Customers</span>
            </div>
          </div>
        </div>

        <div className="flexCenter hero-right">
          <div className="image-container">
            <img
              src="./residential-variable-refrigerant-system-500x500.webp"
              alt="Residential Variable Refrigerant System"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
