import React, { Component } from 'react';
// import API from './API';
import axios from 'axios';
import { computeHeadingLevel } from '@testing-library/react';

class NewMessageForm extends Component {
  constructor() {
    super();
    this.state = {
        title: "",
        body: "",
        receiver: ""
    }
  }

  handlePostMessage = (event) => {
    event.preventDefault();

    axios.post('/messages/', {
      title: this.state.title,
      body: this.state.body,
      receiver: this.state.receiver
    }).then((response) => {
        console.log(response);
        console.log(response.data);
      })
  }

  handleChange = (event) => {
    event.preventDefault();
    this.setState({ [event.target.name]: event.target.value });
    console.log(this.state);
  }

  render() {
    return(
      <div className="NewMessageForm">
         <form onSubmit={this.handlePostMessage}>
           <label>Title: <input type="text" name="title" onChange={this.handleChange}/></label>
           <label>Body: <input type="textarea" name="body" onChange={this.handleChange}/></label>
           <label>Reciever: <input type="text" name="receiver" onChange={this.handleChange}/></label>
           <button type="submit">Send</button>
         </form>
      </div>
    )
  }
}

export default NewMessageForm;