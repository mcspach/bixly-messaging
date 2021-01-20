import React, { Component } from 'react';
// import API from './API';

import axios from 'axios';

class LoginForm extends Component {

  constructor() {
      super();
      this.state = {
          username: "",
          password: "",
          token: "",
      };
  }


  handleLogin = (event) => {
    event.preventDefault();

    axios.post('https://messaging-test.bixly.com/api-token-auth/', {username: this.state.username, password: this.state.password})
      .then((response) => {
        console.log(response.data);
        this.setState({token: response.data.token});
        console.log(this.state);
        axios.defaults.baseURL = 'https://messaging-test.bixly.com/';
        axios.defaults.headers.common['Authorization'] = 'Token ' + this.state.token;
        console.log(axios.defaults);
      })
  }

  handleChange = (event) => {
    event.preventDefault();
    this.setState({ [event.target.name]: event.target.value });
    console.log(this.state.username);
    console.log(this.state.password);
  }

  render() {
    if (this.state.token === "") {
    return(
      <div className="LoginForm">
         <form onSubmit={this.handleLogin}>
           <label>Username: <input type="text" name="username" onChange={this.handleChange}/>
            </label>
           <label>Password: <input type="text" name="password" onChange={this.handleChange}/>
            </label>
           <button type="submit">Login</button>
         </form>
      </div>
    )} else {
      return null;
    }
  }
}

export default LoginForm;
