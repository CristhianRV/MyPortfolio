import React from "react";

class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <div>{this.props.inicio}</div>;
  }
}

export default Home;
