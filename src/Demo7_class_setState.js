import React from "react";

// 会  shouldComponentUpdate默认返回true
class Demo extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }

  // shouldComponentUpdate(nextProps, nextState) {
  //   if (this.state.count === nextState.count) {
  //     return false;
  //   }
  // }

  handleClick = () => {
    this.setState({
      count: 0,
    });
  };

  render() {
    console.log("count值没变 我是否会打印？");
    return <button onClick={this.handleClick}>+</button>;
  }
}

export default Demo;
