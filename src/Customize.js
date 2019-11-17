import React, { Component } from "react";
import CustomizeItem from "./CustomizeItem";

class Customize extends Component {
  render() {
    return (
      <div>
        <form className="main__form">
          <h2>Customize your laptop</h2>
          <CustomizeItem
            features={this.props.features}
            key={this.props.featureHash}
          />
        </form>
      </div>
    );
  }
}

export default Customize;
