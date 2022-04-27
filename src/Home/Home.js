import React, { Component } from 'react'

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }
  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }
  tick() {
    this.setState({
      date: new Date()
    });
  }
 
  activateLasers = () => {
    console.log('this is:', this);
  }
  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
        <button onClick={this.activateLasers}>
  Activate Lasers
</button>
      </div>
    );
  }
}
export default Home
