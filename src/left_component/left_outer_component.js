import React from "react";
import AllDataLists from ".././services/data_lists";
import LeftInnerOneComponent from "./left_inner_one_component";
import LeftInnerTwoComponent from "./left_inner_two_component";
import LeftInnerThreeComponent from "./left_inner_three_component";

class LeftOuterComponent extends React.Component {
  render() {
    return (
      <div>
        {AllDataLists.map((datalist) => (
          <div key={datalist.id}>
            <div
              style={{
                backgroundColor: "#00152a",
                display: "flex",
                padding: "0 40px",
              }}
            >
              <p style={{ fontSize: 35, margin: "auto 90px auto 0px" }}>
                {datalist.Icon}
              </p>
              <h3>{datalist.title}</h3>
            </div>

            {(() => {
              switch (datalist.id) {
                case "1":
                  return <LeftInnerOneComponent items={datalist} />;
                case "2":
                  return <LeftInnerTwoComponent items={datalist} />;
                case "3":
                  return <LeftInnerThreeComponent items={datalist} />;
                default:
                  return <LeftInnerOneComponent items={datalist} />;
              }
            })()}
          </div>
        ))}
      </div>
    );
  }
}

export default LeftOuterComponent;
