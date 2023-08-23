import React, { useRef } from "react";

import mainImage from "../assets/main.svg";
import slideRight from "../assets/slide right.svg";
import slideLeft from "../assets/slide left.svg";

import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import arrow from "../assets/arrow.svg";

import "../css/hero.css";

SwiperCore.use([Navigation]);

function Hero() {
  const swiperRef = useRef(null);

  const handleNext = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideNext();
    }
  };

  const handlePrev = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slidePrev();
    }
  };

  const swiperOptions = {
    ref: swiperRef,
    loop: true,
    autoplay: {
      delay: 1000, // Adjust the autoplay delay (in milliseconds)
    },
    navigation: {
      nextEl: ".slideRight",
      prevEl: ".slideLeft",
    },
  };

  return (
    <div className="heroSection">
      <div className="heroImages">
        {" "}
        <Swiper
          {...swiperOptions}
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
        >
          <SwiperSlide>
            {" "}
            <img className="heroImage" src={mainImage} alt="image not found" />
          </SwiperSlide>

          <SwiperSlide>
            {" "}
            <img className="heroImage" src={mainImage} alt="image not found" />
          </SwiperSlide>

          <SwiperSlide>
            {" "}
            <img className="heroImage" src={mainImage} alt="image not found" />
          </SwiperSlide>
        </Swiper>
      </div>

      <div className="heroDetails">
        <div className="heroButtons">
          <img className="slideRight" src={slideRight} onClick={handlePrev} />
          <img className="slideLeft" src={slideLeft} onClick={handleNext} />
        </div>
        <div className="heroTitle">
          <h1>
            Faith, Trust
            <br />
            and Excellence
          </h1>
          <p>
            learn anything anywhere, at any time learn
            <br />
            anything anywhere, at any time..
          </p>

          <div className="readMore">
            <a>Read More</a>
            <img src={arrow} alt="image not found" />
          </div>
        </div>

        <div className="notification">
          <div className="notification_text">
            <h1>Welcome program</h1>
            <p>
              Bsc.CSIT first batch are conducting welcome program for second
              batch students. The program will be held in hotel pauwa.
            </p>
            <div className="readMoreNotification">
              <a>Read More</a>
              <img src={arrow} alt="image not found" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
