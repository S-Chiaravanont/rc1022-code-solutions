import React from 'react';

export default class HotButton extends React.Component {
  constructor(props) {
    super(props);
    this.clickHandle = this.clickHandle.bind(this);
    this.state = { numclick: 0 };
  }

  clickHandle() {
    const num = this.state.numclick;
    const numPlus = num + 1;
    this.setState({ numclick: numPlus });
  }

  render() {
    if (this.state.numclick < 3) {
      return <button onClick={this.clickHandle} className="hot1">Hot Button</button>;
    } else if (this.state.numclick < 6) {
      return <button onClick={this.clickHandle} className="hot2">Hot Button</button>;
    } else if (this.state.numclick < 9) {
      return <button onClick={this.clickHandle} className="hot3">Hot Button</button>;
    } else if (this.state.numclick < 12) {
      return <button onClick={this.clickHandle} className="hot4">Hot Button</button>;
    } else if (this.state.numclick < 15) {
      return <button onClick={this.clickHandle} className="hot5">Hot Button</button>;
    } else {
      return <button className="hot6">Hot Button</button>;
    }
  }
}
