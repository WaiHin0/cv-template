import React from "react";
import AllInfoLists from ".././services/info_lists";
import RightInnerComponent from "./right_inner_component";
import RightInnerOneComponent from "./right_inner_one_component";
import RightInnerTwoComponent from "./right_inner_two_component";

class RightOuterComponent extends React.Component {
  render() {
    return (
      <div>
        {AllInfoLists.map((infolist) => (
          <div
            key={infolist.id}
            style={{
              borderBottom: "2px solid #e9e9e9",
              position: "relative",
              padding: "30px 0",
            }}
          >
            <div
              style={{
                backgroundColor: infolist.colorCode,
                color: "#ffffff",
                padding: 10,
                transform: "rotate(-90deg)",
                position: "absolute",
                textAlign: "center",
                width: "25%",
                top: "41%",
                left: "-56px",
              }}
            >
              <h3 style={{ fontWeight: 500, margin: 0 }}>{infolist.title}</h3>
            </div>

            {(() => {
              switch (infolist.id) {
                case "1":
                  return <RightInnerComponent items={infolist} />;
                case "2":
                  return <RightInnerComponent items={infolist} />;
                case "3":
                  return <RightInnerOneComponent items={infolist} />;
                case "4":
                  return <RightInnerTwoComponent items={infolist} />;
                case "5":
                  return <RightInnerComponent items={infolist} />;
                default:
                  return <RightInnerComponent items={infolist} />;
              }
            })()}
            <div
              style={{
                color: infolist.colorCode,
                position: "absolute",
                right: 0,
                top: "17%",
                textAlign: "center",
                width: "20%",
              }}
            >
              <p style={{ fontSize: 50 }}>{infolist.Icon}</p>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default RightOuterComponent;
