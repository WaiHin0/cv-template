import React from "react";

class LeftInnerThreeComponent extends React.Component {
  render() {
    return (
      <div style={{ padding: "20px 60px" }}>
        {this.props.items.listItem.map((item, index) => (
          <ul
            style={{
              listStyle: "none",
              padding: 0,
              display: "flex",
            }}
            key={index}
          >
            <li>{item.text}</li>
          </ul>
        ))}
      </div>
    );
  }
}

export default LeftInnerThreeComponent;
