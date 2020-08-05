import React from "react";

class ProfileImageComponent extends React.Component {
  render() {
    return (
      <div>
        <div
          style={{
            width: "50%",
            borderRadius: "50%",
            overflow: "hidden",
            margin: "auto",
          }}
        >
          <img
            src="https://i.pinimg.com/originals/1b/59/c8/1b59c809d30e78e05a5f1794b33100c8.jpg"
            alt=""
            style={{ maxWidth: "100%" }}
          />
        </div>
        <p>Hello I am</p>
        <h2>Your Name</h2>
        <p>Web Designer</p>
      </div>
    );
  }
}

export default ProfileImageComponent;
