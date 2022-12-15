import React from 'react';

export default class StopWatch extends React.Component {
  constructor(props) {
    super(props);
    this.tick = this.tick.bind(this);
    this.playPauseHandler = this.playPauseHandler.bind(this);
    this.reset = this.reset.bind(this);
    this.state = { isPause: true, currentTime: 0 };
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    if (!this.state.isPause) {
      const curTime = this.state.currentTime;
      const nextTime = curTime + 1;
      this.setState({ currentTime: nextTime });
    }
  }

  reset() {
    if (this.state.isPause) {
      const resetTime = 0;
      this.setState({ currentTime: resetTime });
    }
  }

  playPauseHandler() {
    if (this.state.isPause === true) {
      this.setState({ isPause: false });
    } else {
      this.setState({ isPause: true });
    }
  }

  render() {
    if (this.state.isPause) {
      return (
        <div>
          <div onClick={this.reset} className='watch-face'>
            <h1>{this.state.currentTime}</h1>
          </div>
          <i onClick={this.playPauseHandler} className='fa-solid fa-play padding'></i>
        </div>
      );
    } else {
      return (
        <div>
          <div onClick={this.reset} className='watch-face'>
            <h1>{this.state.currentTime}</h1>
          </div>
          <i onClick={this.playPauseHandler} className='fa-solid fa-pause padding'></i>
        </div>
      );
    }
  }
}
