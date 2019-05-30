import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";

function Hooks3(props) {
  const [count, setCount] = useState(0);
  const [size, setSize] = useState({
    width: document.documentElement.clientWidth,
    height: document.documentElement.clientHeight
  });
  const onResize = () => {
    setSize({
      width: document.documentElement.clientWidth,
      height: document.documentElement.clientHeight
    });
  };
  useEffect(() => {
    document.title = count;
  });
  useEffect(() => {
    window.addEventListener("resize", onResize, false);

    return () => {
      window.removeEventListener("resize", this.onResize, false);
    };
  }, []);
  return (
    <button
      type="button"
      onClick={() => {
        setCount(count + 1);
      }}
    >
      Click({count}),size({size.width}*{size.height})
    </button>
  );
}

ReactDOM.render(<Hooks3 />, document.getElementById("root"));
