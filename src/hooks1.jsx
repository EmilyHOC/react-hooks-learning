import React, { useState } from "react";
import ReactDOM from "react-dom";

function Hooks(props) {
  const [count, setCount] = useState(() => {
    console.log("initial count");
    return props.defaultCount || 0;
  });
  const [name] = useState("mike");
  return (
    <button
      type="button"
      onClick={() => {
        setCount(count + 1);
      }}
    >
      Click ({count}), name({name})
    </button>
  );
}
ReactDOM.render(<Hooks />, document.getElementById("root"));
