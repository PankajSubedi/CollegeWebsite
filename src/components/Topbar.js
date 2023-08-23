import React from "react";
import "../css/topbar.css";
function Topbar() {
  return (
    <div className="topBar">
      <div className="topBarWrapper">
        {" "}
        <ul>
          <li>VISIT NOW</li>
          <li>SEND MESSAGE</li>
          <li>CALL NOW</li>
        </ul>
        <a href="#">082-521517</a>
      </div>
    </div>
  );
}

export default Topbar;
