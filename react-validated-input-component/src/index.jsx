import React from 'react';
import ReactDOM from 'react-dom/client';

class PasswordHandle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      password: '',
      mark: 'fa-solid fa-xmark',
      errorMessage: 'A password is required.'
    };
  }

  checkPasswordRequirement(event) {
    const currentPassword = event.target.value;
    this.setState({ password: currentPassword });
    if (currentPassword.length === 0) {
      this.setState({ mark: 'fa-solid fa-xmark' });
      this.setState({ errorMessage: 'A password is required.' });
    } else if (currentPassword.length < 8) {
      this.setState({ mark: 'fa-solid fa-xmark' });
      this.setState({ errorMessage: 'Your password is too short.' });
    } else {
      this.setState({ mark: 'fa-solid fa-check' });
      this.setState({ errorMessage: '' });
    }
  }

  render() {
    return (
      <div>
        <label htmlFor="password">
          Password <br />
          <input type="password" onChange={e => this.checkPasswordRequirement(e)} value={this.state.password} />
        </label>
        <i className={this.state.mark}></i>
        <br />
        <p>{this.state.errorMessage}</p>
      </div>
    );
  }

}

const container = document.querySelector('#root');
const root = ReactDOM.createRoot(container);

root.render(<PasswordHandle />);
