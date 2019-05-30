import React, { Component, PureComponent } from "react";
import ReactDOM from "react-dom";

class Foo extends PureComponent {
  // shouldComponentUpdate(nextProps, nextState) {
  //   if (nextProps.name === this.props.name) {
  //     return false;
  //   }
  //   return true;
  // }
  render() {
    console.log("Foo");
    return <div>{this.props.person.age}</div>;
  }
}

class Memo extends Component {
  state = {
    count: 0,
    person: {
      age: 1
    }
  };
  callback = () => {};
  render() {
    const person = this.state.person;
    return (
      <div>
        <button
          onClick={() => {
            person.age++;
            this.setState({ count: this.state.count + 1 });
          }}
        >
          Add
        </button>
        <Foo person={person} cb={this.callback} />
      </div>
    );
  }
}

ReactDOM.render(<Memo />, document.getElementById("root"));
