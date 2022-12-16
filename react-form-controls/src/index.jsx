import React from 'react';
import ReactDOM from 'react-dom/client';

class RegistrationForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: '',
      password: ''
    };

    this.handleUsernameChange = this.handleUsernameChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleUsernameChange(event) {
    const target = event.target;
    this.setState({ userName: target.value });
  }

  handlePasswordChange(event) {
    const target = event.target;
    this.setState({ password: target.value });
  }

  handleSubmit(event) {
    console.log(this.state);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="userName">
          Username
          <input
            type="text"
            name="userName"
            value={this.state.userName}
            onChange={this.handleUsernameChange} />
        </label>
        <label htmlFor="password">
          Password
          <input
            type="password"
            name="password"
            id="password"
            value={this.state.password}
            onChange={this.handlePasswordChange} />
        </label>
        <input
          type="submit"
          value="Sign Up" />
      </form>
    );
  }
}

const container = document.querySelector('#root');
const root = ReactDOM.createRoot(container);

root.render(<RegistrationForm />);
