import React, { Component } from 'react';
// import API from './API';

import axios from 'axios';

class LoginForm extends Component {
  state = {
      username: "",
      password: "",
  }

  handlePostMessage = (event) => {
    event.preventDefault();
    

    axios.post('https://messaging-test.bixly.com/api-token-auth/', {username: this.state.username, password: this.state.password})
      .then((response) => {
        console.log(response.data);
      })
  }

  handleChange = (event) => {
    event.preventDefault();
    let newKey = event.target.name;
    console.log(newKey);
    this.setState({ newKey: event.target.value });
    console.log(this.state.username);
    console.log(this.state.password);
  }

  render() {
    return(
      <div className="LoginForm">
         <form onSubmit={this.handlePostMessage}>
           <label>Username:
             <input type="text" name="username" onChange={this.handleChange}/>
            </label>
           <label>Password:
             <input type="text" name="password" onChange={this.handleChange}/>
            </label>
           <button type="submit">Send</button>
         </form>
      </div>
    )
  }
}

export default LoginForm;
// export { TOKEN };