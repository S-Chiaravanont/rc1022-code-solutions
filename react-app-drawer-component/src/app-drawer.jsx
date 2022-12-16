import React from 'react';

export default class AppDrawer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { drawerIsOpen: false };
    this.drawerClickHandle = this.drawerClickHandle.bind(this);
    this.drawerRender = this.drawerRender.bind(this);
  }

  drawerClickHandle(event) {
    const { drawerIsOpen } = this.state;
    drawerIsOpen === true ? this.setState({ drawerIsOpen: false }) : this.setState({ drawerIsOpen: true });
  }

  drawerRender() {
    let element = null;
    let modalStyle = null;
    let modalBgStyle = null;
    const { drawerIsOpen } = this.state;
    if (drawerIsOpen) {
      modalStyle = 'modal-box';
      modalBgStyle = 'gray-bg';
    } else {
      modalStyle = 'modal-box drawer-pos-hide';
      modalBgStyle = 'gray-bg drawer-bg-pos-hide';
    }
    element = (
      <div className="container pos-relative">
        <div>
          <i className="fa-solid fa-bars font-2rem" onClick={this.drawerClickHandle} ></i>
        </div>
        <div className={modalBgStyle} onClick={this.drawerClickHandle} >
        </div>
        <div className={modalStyle}>
          <div className="row flex-col">
            <div className="column-full menu-text">
              <h2>&nbsp; &nbsp; MENU</h2>
            </div>
            <div className="column-full item-text" onClick={this.drawerClickHandle}>
              <p>&nbsp; &nbsp; Pokemon Red</p>
            </div>
            <div className="column-full item-text"
              onClick={this.drawerClickHandle}>
              <p>&nbsp; &nbsp; Pokemon Blue</p>
            </div>
            <div className="column-full item-text"
              onClick={this.drawerClickHandle}>
              <p>&nbsp; &nbsp; Pokemon Yellow</p>
            </div>
          </div>
        </div>
      </div>
    );
    return element;
  }

  render() {
    const element = this.drawerRender();
    return element;
  }
}
