import React, { Component, memo } from "react";
import ReactDOM from "react-dom";

const Foo = memo(function Foo(props) {
  console.log('Foo render')
  return <div>{props.person.age}</div>;
})

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
