import React from "react";

class ProfileImageComponent extends React.Component {
  render() {
    return (
      <div
        style={{
          textAlign: "center",
          padding: "50px 0",
        }}
      >
        <div
          style={{
            width: "50%",

            overflow: "hidden",
            margin: "auto",
            marginBottom: 40,
          }}
        >
          <img
            src="https://petrophysics.in/wp-content/uploads/2018/05/create_your_own_square_sticker-r4e4c1895a57346bea2d8910cded79716_v9wf3_8byvr_324.jpg"
            alt=""
            style={{
              maxWidth: "100%",
              borderRadius: "50%",
            }}
          />
        </div>
        <h3
          style={{
            display: "inline-block",
            backgroundColor: "#00152a",
            padding: "5px 20px",
          }}
        >
          Hello, I am..
        </h3>
        <h1
          style={{
            margin: 0,
          }}
        >
          Your Name
        </h1>
        <p
          style={{
            margin: 0,
          }}
        >
          Web Designer
        </p>
      </div>
    );
  }
}

export default ProfileImageComponent;
