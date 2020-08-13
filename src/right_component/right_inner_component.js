import React from "react";

class RightInnerComponent extends React.Component {
  render() {
    return (
      <div
        style={{
          //   padding: "20px 60px",
          margin: "auto 20% auto 25%",
        }}
      >
        {this.props.items.listItem.map((item, index) => (
          <ul
            style={{
              listStyle: "none",
              padding: 0,
              display: "flex",
              justifyContent: "space-between",
            }}
            key={index}
          >
            <li style={{ width: "50%" }}> YYYY - YYYY </li>
            <li style={{ width: "50%" }}>
              {item.text1} <br /> {item.text2}
            </li>
          </ul>
        ))}
      </div>
    );
  }
}

export default RightInnerComponent;
