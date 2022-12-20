import React from 'react';

export default class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentCarouselIndex: 0,
      images: props.url
    };
    this.Backward = this.Backward.bind(this);
    this.Forward = this.Forward.bind(this);
    this.DotClickHandle = this.DotClickHandle.bind(this);
    this.TimerStart = this.TimerStart.bind(this);
    this.TimerStop = this.TimerStop.bind(this);
  }

  Backward() {
    this.TimerStop();
    const currentIndex = this.state.currentCarouselIndex;
    if (currentIndex === 0) {
      const lastIndex = this.state.images.length - 1;
      this.setState({ currentCarouselIndex: lastIndex });
    } else {
      const previousIndex = currentIndex - 1;
      this.setState({ currentCarouselIndex: previousIndex });
    }
  }

  Forward() {
    this.TimerStop();
    const currentIndex = this.state.currentCarouselIndex;
    const lastIndex = this.state.images.length - 1;
    if (currentIndex === lastIndex) {
      this.setState({ currentCarouselIndex: 0 });
    } else {
      const nextIndex = currentIndex + 1;
      this.setState({ currentCarouselIndex: nextIndex });
    }
  }

  DotClickHandle(event) {
    const dotId = Number(event.target.id);
    this.setState({ currentCarouselIndex: dotId });
    this.TimerStop();
  }

  RenderDots() {
    const element = this.state.images.map((value, index) => {
      if (index === this.state.currentCarouselIndex) {
        return <i className='fa-solid fa-circle' id={index} key={index} onClick={this.DotClickHandle}></i>;
      } else {
        return <i className='fa-regular fa-circle' id={index} key={index} onClick={this.DotClickHandle}></i>;
      }
    });
    return element;
  }

  DisplayCarousel() {
    const element = (
      <div className='container'>
        <div className='row align-items-center' >
          <div className='column-eighth text-center'>
            <i className='fa-solid fa-chevron-left' onClick={this.Backward}></i>
          </div>
          <div className='column-six-eighth'>
            <div className='hero-img'>
              <img src={`${this.state.images[this.state.currentCarouselIndex]}`} />
            </div>
          </div>
          <div className='column-eighth text-center'>
            <i className='fa-solid fa-chevron-right' onClick={this.Forward}></i>
          </div>
        </div>
        <div className='row'>
          <div className='column-full text-center carousel-dot-div'>
            {this.RenderDots()}
          </div>
        </div>
      </div>
    );
    return element;
  }

  TimerStart() {
    if (!this.intervalId) {
      this.intervalId = setInterval(() => {
        this.Forward();
      }, 3000);
    }
  }

  TimerStop() {
    clearInterval(this.intervalId);
    this.intervalId = null;
  }

  render() {
    const element = this.DisplayCarousel();
    this.TimerStart();
    return element;
  }
}
