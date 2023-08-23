import React from "react";
import duration from "../assets/duration.svg";
import eventImage from "../assets/eventImage.png";
import arrow from "../assets/arrow.svg";

import blueArrow from "../assets/blueArrow.svg";

import "../css/events.css";

function Events() {
  return (
    <div id="events" className="eventWrapper">
      <div className="eventTop">
        <h1>Events</h1>
        <div className="seeAll">
          <a>See All Events</a>
          <img src={arrow} alt="image not found" />
        </div>
      </div>

      {/* events list */}
      <div className="eventList">
        <div className="eventContainer">
          <div className="sideBar"></div>
          <div className="eventsContents">
            <div className="eventDate">
              <h1>17</h1>
              <p>AUG</p>
              <hr className="eventHr"></hr>
            </div>
            <div className="eventDetails">
              <h1>New Admission - CSIT</h1>
              <div className="eventDuration">
                <img src={duration} />
                <h2>May 23 - Jul 21</h2>
              </div>
              <p>
                Hurry up !! No w it’s your time to get ready for placing
                yourself in BSC.CSIT limited seats available visit our college
                or just fill online form to reserve your seat.
              </p>

              <div className="eventReadMore">
                <p>Read More</p>
                <img src={blueArrow} />
              </div>
            </div>
          </div>

          <div className="eventImage">
            <img src={eventImage} />
          </div>
        </div>
        {/* events list */}
        <div className="eventContainer">
          <div className="sideBar"></div>
          <div className="eventsContents">
            <div className="eventDate">
              <h1>17</h1>
              <p>AUG</p>
              <hr className="eventHr"></hr>
            </div>
            <div className="eventDetails">
              <h1>New Admission - CSIT</h1>
              <div className="eventDuration">
                <img src={duration} />
                <h2>May 23 - Jul 21</h2>
              </div>
              <p>
                Hurry up !! No w it’s your time to get ready for placing
                yourself in BSC.CSIT limited seats available visit our college
                or just fill online form to reserve your seat.
              </p>

              <div className="eventReadMore">
                <p>Read More</p>
                <img src={blueArrow} />
              </div>
            </div>
          </div>

          <div className="eventImage">
            <img src={eventImage} />
          </div>
        </div>

        {/* events list */}
        <div className="eventContainer">
          <div className="sideBar"></div>
          <div className="eventsContents">
            <div className="eventDate">
              <h1>17</h1>
              <p>AUG</p>
              <hr className="eventHr"></hr>
            </div>
            <div className="eventDetails">
              <h1>New Admission - CSIT</h1>
              <div className="eventDuration">
                <img src={duration} />
                <h2>May 23 - Jul 21</h2>
              </div>
              <p>
                Hurry up !! No w it’s your time to get ready for placing
                yourself in BSC.CSIT limited seats available visit our college
                or just fill online form to reserve your seat.
              </p>

              <div className="eventReadMore">
                <p>Read More</p>
                <img src={blueArrow} />
              </div>
            </div>
          </div>

          <div className="eventImage">
            <img src={eventImage} />
          </div>
        </div>

        {/* events list */}
        <div className="eventContainer">
          <div className="sideBar"></div>
          <div className="eventsContents">
            <div className="eventDate">
              <h1>17</h1>
              <p>AUG</p>
              <hr className="eventHr"></hr>
            </div>
            <div className="eventDetails">
              <h1>New Admission - CSIT</h1>
              <div className="eventDuration">
                <img src={duration} />
                <h2>May 23 - Jul 21</h2>
              </div>
              <p>
                Hurry up !! No w it’s your time to get ready for placing
                yourself in BSC.CSIT limited seats available visit our college
                or just fill online form to reserve your seat.
              </p>

              <div className="eventReadMore">
                <p>Read More</p>
                <img src={blueArrow} />
              </div>
            </div>
          </div>

          <div className="eventImage">
            <img src={eventImage} />
          </div>
        </div>
        <div className="seeAllEvents">
          <a>See All Events</a>
        </div>
      </div>
    </div>
  );
}

export default Events;
