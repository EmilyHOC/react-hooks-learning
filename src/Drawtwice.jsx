import React,{ lazy, Component,Suspense } from "react";
import ReactDOM from "react-dom";

let About = lazy(() => import("./About.jsx"));

class RetryDraw extends Component {
  state = {
    load: false,
    error: false
  };
  //手动触发异步加载
  load = () => {
    this.setState({
      load: true
    });
  };
  //加载失败后点击重试
  retry = () => {
    this.setState({
      error: false
    });
  };
  //ErrorBoundary的关键，无需再实现componentDidCatch
  static getDerivedStateFromError(e) {
    return { error: e };
  }
  render() {
    const { load, error } = this.state;

    //显示错误页
    if (error) {
      return (
        <div>
          <p>{error.message}</p>
          <button onClick={this.retry}>retry</button>
        </div>
      );
    }
    return (
      <div>
        <button type="button" onClick={this.load}>
          load
        </button>
        <Suspense fallback={<div>loading</div>}>{load && <About />}</Suspense>
      </div>
    );
  }
}
const rootElement = document.getElementById("root");
ReactDOM.render(<RetryDraw />, rootElement);
