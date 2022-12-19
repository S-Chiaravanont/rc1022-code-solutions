import React from 'react';
import UserList from './user-list';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      isLoading: true
    };
  }

  componentDidMount() {
    /* your code here */
    const myRequest = new Request('https://jsonplaceholder.typicode.com/users');
    fetch(myRequest)
      .then(res => res.json())
      .then(data => {
        for (const user of data) {
          this.state.users.push(user);
        }
        this.setState({ isLoading: false });
      })
      .catch(err => {
        console.error('error:', err);
      });
  }

  render() {
    return this.state.isLoading
      ? <p>Loading...</p>
      : <UserList users={this.state.users} />;
  }
}

export default App;
