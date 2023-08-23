import React from "react";

import "../css/about.css";

function About() {
  return (
    <div id="about" className="aboutWrapper">
      <div className="aboutTop">
        <h1>About</h1>
      </div>
      <div className="aboutInfo">
        <div className="imgContainer"></div>

        <h1>
          A beacon of quality education in Dang. With a history spanning over
          four decades, we offer diverse undergraduate and postgraduate programs
          in science, management, humanities, and social sciences. Our dedicated
          faculty fosters critical thinking and practical skills. Our
          state-of-the-art facilities, including modern labs and libraries,
          ensure a holistic learning experience. We prioritize student growth
          and development, guided by integrity, inclusivity, and sustainability.
          Research and community engagement empower students to make a positive
          impact. Join us at Mahendra Multiple Campus, where knowledge meets
          innovation, and aspirations find a path to success.
        </h1>
      </div>

      <div className="achievmentsContainer">
        <div className="achievement">
          <h1>10,000+</h1>
          <p>Students</p>
        </div>
        <div className="achievement">
          <h1>100+</h1>
          <p>Awards</p>
        </div>
        <div className="achievement">
          <h1>5+</h1>
          <p>Courses</p>
        </div>
        <div className="achievement">
          <h1>50+</h1>
          <p>Years</p>
        </div>
      </div>
    </div>
  );
}

export default About;
