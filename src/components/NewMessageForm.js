import React, { Component } from 'react';
// import API from './API';
import axios from 'axios';

class NewMessageForm extends Component {
  constructor() {
    super();
    this.state = {
        title: "",
        body: "",
        receiver: "",
        id: "",
        error: false
    }
  }

  handlePostMessage = (event) => {
    event.preventDefault();
    axios.post('/messages/', {
      title: this.state.title,
      body: this.state.body,
      receiver: this.state.receiver
    }).then((response) => {
        this.setState({id: response.data.id})
      }).catch(error => 
        this.setState({error: true}));
  }

  handleChange = (event) => {
    event.preventDefault();
    this.setState({ [event.target.name]: event.target.value });
  }

  render() {
    if (this.state.id === "") {
    return(
      <div className="NewMessageForm">
         <form onSubmit={this.handlePostMessage}>
           <label>Title: <input type="text" name="title" onChange={this.handleChange}/></label>
           <label>Body: <input type="textarea" name="body" onChange={this.handleChange}/></label>
           <label>Reciever: <input type="text" name="receiver" onChange={this.handleChange}/></label>
           <button type="submit">Send</button>
         </form>
      </div>)
    } else {
      return(
        <div className="NewMessageForm">
          <p>Thanks.</p>
          <p>Your message was sent.</p>
        </div>
      )
    }
  }
}

export default NewMessageForm;