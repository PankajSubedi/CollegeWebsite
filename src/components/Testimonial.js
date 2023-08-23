import React from "react";
import "../css/testimonials.css";

// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import img from "../assets/img.jpg";
import stars from "../assets/stars.svg";

function Testimonial() {
  return (
    <div className="testimonialWrapper">
      <div className="testimonialTop">
        <h1>Testimonials</h1>
      </div>

      <div className="testimonialContainer">
        <Swiper
          breakpoints={{
            1024: {
              slidesPerView: 2,
            },

            768: {
              navigation: true,
              slidesPerView: 1,
              // Other settings for screens >= 768px
            },
            480: {
              navigation: false,
              slidesPerView: 1,
              // Other settings for screens >= 480px
            },
          }}
          // install Swiper modules
          modules={[Navigation, Pagination]}
          spaceBetween={50}
          // slidesPerView={2}

          pagination={{ clickable: true }}
          // scrollbar={{ draggable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
        >
          <SwiperSlide>
            <div className="testimonialBox">
              <div className="testimonialContents">
                <div className="studentDetails">
                  <div className="studentPhoto">
                    <img src={img} />
                    <div>
                      <h1>Sangam GC</h1>
                      <p>Bachelors | Bsc.CSIT</p>
                    </div>
                  </div>
                  <div className="stars">
                    <img src={stars} />
                  </div>
                </div>

                <div className="studentsReview">
                  <p>
                    "Completing B.Sc. CSIT was a transformative experience. The
                    program's hands-on approach and diverse curriculum equipped
                    me with tech skills and problem-solving abilities. Grateful
                    for the opportunities it opened in the tech industry!"
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="testimonialBox">
              <div className="testimonialContents">
                <div className="studentDetails">
                  <div className="studentPhoto">
                    <img src={img} />
                    <div>
                      <h1>Sanajy Khadka</h1>
                      <p>Bachelors | Bsc.CSIT</p>
                    </div>
                  </div>
                  <div className="stars">
                    <img src={stars} />
                  </div>
                </div>

                <div className="studentsReview">
                  <p>
                    "Completing B.Sc. CSIT was a transformative experience. The
                    program's hands-on approach and diverse curriculum equipped
                    me with tech skills and problem-solving abilities. Grateful
                    for the opportunities it opened in the tech industry!"
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="testimonialBox">
              <div className="testimonialContents">
                <div className="studentDetails">
                  <div className="studentPhoto">
                    <img src={img} />
                    <div>
                      <h1>Sangam GC</h1>
                      <p>Bachelors | Bsc.CSIT</p>
                    </div>
                  </div>
                  <div className="stars">
                    <img src={stars} />
                  </div>
                </div>

                <div className="studentsReview">
                  <p>
                    "Completing B.Sc. CSIT was a transformative experience. The
                    program's hands-on approach and diverse curriculum equipped
                    me with tech skills and problem-solving abilities. Grateful
                    for the opportunities it opened in the tech industry!"
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}

export default Testimonial;
