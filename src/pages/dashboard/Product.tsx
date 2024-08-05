import React from "react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css";
import "./Product.css";
import data from "./utils/slider.json";
import { sliderSettings } from "./utils/common";

// Define the type for the slider data
interface SliderData {
  image: string;
  name: string;
  details: string;
}

const Product: React.FC = () => {
  return (
    <section className="r-wrapper">
      <div className="paddings innerWidth r-container">
        <div className="flexColStart r-head ">
          <span className="orangeText">Our Product</span>
          <span className="primaryText">Ranges</span>
        </div>
        <Swiper {...sliderSettings}>
          <SliderButtons />
          {data.map((card: SliderData, i: number) => (
            <SwiperSlide key={i}>
              <div className="flexColStart r-card">
                <img src={card.image} alt="home" />
                <span className="primaryText r-name">
                  <span>{card.name}</span>
                </span>
                <span className="secondaryText">{card.details}</span>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Product;

const SliderButtons: React.FC = () => {
  const swiper = useSwiper();
  return (
    <div className="r-button">
      <button onClick={() => swiper.slidePrev()}>&lt;</button>
      <button onClick={() => swiper.slideNext()}>&gt;</button>
    </div>
  );
};
