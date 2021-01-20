import React, { Component } from 'react';
import axios from 'axios';

class LoginForm extends Component {
  state = {
      title: "",
      body: "",
      receiver: ""
  }

  handlePostMessage = () => {
    const data = {
      title: this.state.title,
      body: this.state.title,
      receiver: this.state.receiver
    };

    axios.post('https://messaging-test.bixly.com/messages/', data)
      .then((response) => {
        console.log(response);
      })
  }

  handleChange = (event) => {
    console.log(event.target.name);
    let newKey = event.target.name;
    this.setState({ newKey: event.target.value });
  }

  render() {
    return(
      <div className="LoginForm">
         <form onSubmit={this.handlePostMessage}>
           <label><input type="text" name="name" onChange={this.handleChange}/>Title</label>
           <label><input type="textarea" name="body" onChange={this.handleChange}/>Body</label>
           <label><input type="text" name="receiver" onChange={this.handleChange}/>Recipient</label>
           <button type="submit">Send</button>
         </form>
      </div>
    )
  }
}

export default LoginForm;