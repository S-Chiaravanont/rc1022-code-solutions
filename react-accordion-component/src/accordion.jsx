import React from 'react';

export default class Accordion extends React.Component {
  constructor(props) {
    super(props);
    this.state = { indexAcc: '' };
    this.clickHandle = this.clickHandle.bind(this);
  }

  clickHandle(event) {
    const targetId = event.target.id;
    targetId === this.state.indexAcc ? this.setState({ indexAcc: '' }) : this.setState({ indexAcc: targetId });
  }

  renderAccordion() {
    const element = this.props.topic.map((obj, index) => {
      const titleId = 'index' + index;
      const contentId = 'content' + index;
      let accStyle;
      this.state.indexAcc === titleId ? accStyle = 'accordion-box' : accStyle = 'accordion-box dis-none';
      const singleAcc = (
        <div>
          <div id={titleId} className='box' onClick={this.clickHandle}>{obj.title}</div>
          <div id={contentId} className={accStyle}>{obj.content}</div>
        </div>
      );
      return singleAcc;
    });
    return element;
  }

  render() {
    const element = this.renderAccordion();
    return element;
  }
}
