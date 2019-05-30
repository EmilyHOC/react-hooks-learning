import React, { Component, lazy ,Suspense} from 'react';
import ReactDOM from 'react-dom';
import "./styles.css";

const About = lazy(() => import(/* webpackChunkName: "about" */ "./About"));

//ErrorBoundary
//componentDidCatch

class App1 extends Component {
  state={
    hasError:false
  }
  componentDidCatch(){
    this.setState({
      hasError:true
    })
  }
  render() {
    if(this.state.hasError){
      return <div>error</div>
    }
    return (
      <div>
        <Suspense fallback={<div>loading</div>}>
          <About></About>
        </Suspense>
      </div>
      )
  }
}
const rootElement = document.getElementById("root");
ReactDOM.render(<App1 />, rootElement);
