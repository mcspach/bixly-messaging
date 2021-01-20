import React, { Component } from 'react';
// import API from './API';
import axios from 'axios';

class NewMessageForm extends Component {
  state = {
      title: "",
      body: "",
      receiver: ""
  }

  handlePostMessage = (event) => {
    event.preventDefault();
    const data = {
      title: this.state.title,
      body: this.state.title,
      receiver: this.state.receiver
    };

    axios.post('messages/', data)
      .then((response) => {
        console.log(response);
        console.log(response.data);
      })
  }

  handleChange = (event) => {
    event.preventDefault();
    console.log(event.target.name);
    let newKey = event.target.name;
    console.log(newKey);
    this.setState({ newKey: event.target.value });
  }

  render() {
    return(
      <div className="NewMessageForm">
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

export default NewMessageForm;