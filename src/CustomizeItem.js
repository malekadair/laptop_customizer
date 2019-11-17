import React, { Component } from "react";

class CustomizeItem extends Component {
  render() {
    return (
      <fieldset className="feature" key={this.props.key}>
        <legend className="feature__name">
          <h3>{this.props.features}</h3>
        </legend>
      </fieldset>
    );
  }
}

export default CustomizeItem;
