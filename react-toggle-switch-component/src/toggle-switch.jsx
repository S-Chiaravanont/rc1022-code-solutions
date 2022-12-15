import React from 'react';

export default class ToggleSwitch extends React.Component {
  constructor(props) {
    super(props);
    this.clickHandle = this.clickHandle.bind(this);
    this.state = { isToggled: true };
  }

  clickHandle() {
    if (this.state.isToggled) {
      this.setState({ isToggled: false });
    } else {
      this.setState({ isToggled: true });
    }
  }

  render() {
    if (this.state.isToggled) {
      return (
        <div onClick={this.clickHandle} className="toggle-house house-on">
          <div className="toggle-button button-on"></div>
          <p className="text-style">ON</p>
        </div>
      );
    } else {
      return (
        <div onClick={this.clickHandle} className="toggle-house house-off">
          <div className="toggle-button button-off"></div>
          <p className="text-style">OFF</p>
        </div>
      );
    }
  }
}
