import React from "react";

class DisplayData extends React.Component {
  render() {
    return (
      <div>
        <h1>{this.props.formData}</h1>
      </div>
    );
  }
}

export default DisplayData;