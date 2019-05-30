import React, { createContext, Component } from "react";
import ReactDOM from "react-dom";
import "./styles.css";

//记录当前设备地电池状态
const BatteryContext = createContext();

class Leaf extends Component {
  static contextType = BatteryContext;

  render() {
    const battery = this.context;
    return <h1>Battery:{battery}</h1>;
  }
}

class Middle extends Component {
  render() {
    return <Leaf />;
  }
}
class App extends Component {
  state = {
    battery: 60
  };
  render() {
    const { battery } = this.state;
    return (
      <BatteryContext.Provider value={battery}>
        <button
          type="button"
          onClick={() => this.setState({ battery: battery - 1 })}
        >
          batteryContext
        </button>
        <Middle />
      </BatteryContext.Provider>
    );
  }
}
const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
