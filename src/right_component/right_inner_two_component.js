import React from "react";

class RightInnerTwoComponent extends React.Component {
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
            }}
            key={index}
          >
            <li style={{ marginRight: 25, fontWeight: 600, fontSize: 23 }}>
              o
            </li>
            <li>
              {item.text1} <br /> {item.text2}
            </li>
          </ul>
        ))}
      </div>
    );
  }
}

export default RightInnerTwoComponent;
