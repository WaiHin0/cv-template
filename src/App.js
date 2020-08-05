import React from "react";
import logo from "./logo.svg";
import "./App.css";
import LeftOuterComponent from "./left_component/left_outer_component";
import RightOuterComponent from "./right_component/right_outer_component";
import ProfileImageComponent from "./left_component/profile_image_component";

function App() {
  return (
    <div style={{ display: "flex", flexDirection: "row", textAlign: "center" }}>
      <div
        style={{ width: "50%", backgroundColor: "#082239", color: "#ffffff" }}
      >
        <ProfileImageComponent />
        <LeftOuterComponent />
      </div>
      <div style={{ width: "50%", backgroundColor: "#ffffff" }}>
        <RightOuterComponent />
      </div>
    </div>
  );
}

export default App;
