import React, { Component } from "react";
import ReactDOM from "react-dom";

class Hooks2 extends Component {
  state = {
    count: 0,
    size: {
      width: document.documentElement.clientWidth,
      height: document.documentElement.clientHeight
    }
  };
  onResize = () => {
    this.setState({
      width: document.documentElement.clientWidth,
      height: document.documentElement.clientHeight
    });
  };
  componentDidMount() {
    document.title = this.state.count;
    window.addEventListener("resize", this.onResize, false);
  }
  componentDidUpdate() {
    document.title = this.state.count;
  }
  componentWillUnmount() {
    window.removeEventListener("resize", this.onResize, false);
  }
  render() {
    const { count, size } = this.state;
    return (
      <button
        type="button"
        onClick={() => {
          this.setState({ count: count + 1 });
        }}
      >
        Click ({count}) size: ({size.width}*{size.height})
      </button>
    );
  }
}

ReactDOM.render(<Hooks2 />, document.getElementById("root"));
