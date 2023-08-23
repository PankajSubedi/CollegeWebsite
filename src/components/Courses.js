import React from "react";

import "../css/courses.css";

import arrow from "../assets/arrow.svg";

import blueArrow from "../assets/blueArrow.svg";

import courseImage from "../assets/courseImage.png";
import courseDuration from "../assets/courseDuration.svg";
import hat from "../assets/hat.svg";
import seats from "../assets/seats.svg";
import add from "../assets/add.svg";
import suggest from "../assets/suggest.jpg";

function Courses() {
  return (
    <div id="courses" className="courseWrapper">
      <div className="courseTop">
        <h1>Courses</h1>
        <div className="allCourses">
          <p>All Courses</p>
          <img src={arrow} />
        </div>
      </div>

      <div className="courses">
        <div className="courseContainer">
          <div className="imageContainer">
            <h1>Bsc.CSIT</h1>
            <p>
              B.Sc. CSIT (Bachelor of Science in Computer Science and
              Information Technology) is a comprehensive undergraduate program
              that combines the fundamental principles of computer science with
              the latest advancements in information technology.
            </p>
          </div>

          <div className="moreDetails">
            <div className="info">
              <img src={courseDuration} />
              <p> 4 Years (8 Semesters)</p>
            </div>
            <div className="info">
              <img src={hat} />
              <p> Bachelor</p>
            </div>
            <div className="info">
              <img src={seats} />
              <p>36(seats)</p>
            </div>

            <div className="seeMore">
              <h1>See More</h1>
              <img src={blueArrow} />
            </div>
          </div>
        </div>

        <div className="courseContainer">
          <div className="imageContainer">
            <h1>Bsc.CSIT</h1>
            <p>
              B.Sc. CSIT (Bachelor of Science in Computer Science and
              Information Technology) is a comprehensive undergraduate program
              that combines the fundamental principles of computer science with
              the latest advancements in information technology.
            </p>
          </div>

          <div className="moreDetails">
            <div className="info">
              <img src={courseDuration} />
              <p> 4 Years (8 Semesters)</p>
            </div>
            <div className="info">
              <img src={hat} />
              <p> Bachelor</p>
            </div>
            <div className="info">
              <img src={seats} />
              <p>36(seats)</p>
            </div>

            <div className="seeMore">
              <h1>See More</h1>
              <img src={blueArrow} />
            </div>
          </div>
        </div>

        <div className="courseContainer">
          <div className="imageContainer">
            <h1>Bsc.CSIT</h1>
            <p>
              B.Sc. CSIT (Bachelor of Science in Computer Science and
              Information Technology) is a comprehensive undergraduate program
              that combines the fundamental principles of computer science with
              the latest advancements in information technology.
            </p>
          </div>

          <div className="moreDetails">
            <div className="info">
              <img src={courseDuration} />
              <p> 4 Years (8 Semesters)</p>
            </div>
            <div className="info">
              <img src={hat} />
              <p> Bachelor</p>
            </div>
            <div className="info">
              <img src={seats} />
              <p>36(seats)</p>
            </div>

            <div className="seeMore">
              <h1>See More</h1>
              <img src={blueArrow} />
            </div>
          </div>
        </div>

        <div className="courseContainer">
          <div className="imageContainer">
            <h1>Bsc.CSIT</h1>
            <p>
              B.Sc. CSIT (Bachelor of Science in Computer Science and
              Information Technology) is a comprehensive undergraduate program
              that combines the fundamental principles of computer science with
              the latest advancements in information technology.
            </p>
          </div>

          <div className="moreDetails">
            <div className="info">
              <img src={courseDuration} />
              <p> 4 Years (8 Semesters)</p>
            </div>
            <div className="info">
              <img src={hat} />
              <p> Bachelor</p>
            </div>
            <div className="info">
              <img src={seats} />
              <p>36(seats)</p>
            </div>

            <div className="seeMore">
              <h1>See More</h1>
              <img src={blueArrow} />
            </div>
          </div>
        </div>

        <div className="courseContainer">
          <div className="suggestContainer">
            <img src={suggest} />
          </div>

          <div className="moreDetails">
            <div className="info">
              <p>
                Shape Your Education: Tell us what courses you want! Your input
                matters in creating a customized curriculum. Together, let's
                embrace new possibilities. #StudentVoice
              </p>
            </div>

            <div className="seeMore">
              <h1>Fill up form</h1>
              <img src={blueArrow} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Courses;
