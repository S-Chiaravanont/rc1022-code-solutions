import React from 'react';

export default class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.images = props.url.reduce((acc, url, index) => {
      const obj = {};
      obj.id = index;
      obj.url = url;
      Object.assign(acc, obj);
      return acc;
    }, {});
  }

  render() {

    // eslint-disable-next-line no-console
    console.log(this.images);
    const element = null;
    return element;
  }
}
