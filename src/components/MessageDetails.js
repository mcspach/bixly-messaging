import React, { Component } from 'react';
import axios from 'axios';

class MessageDetails extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message: {}
    }
  }
  
  fetchMessage = selectedMessageId => {
    axios.get(`/messages/${this.props.selectedMessageId}`)
      .then((response) => { 
        this.setState({message: response.data});
        console.log(this.state.message);
        console.log("state is set to fetched message");
      });
  }

  render() {
    if (this.props.selectedMessageId && (this.props.selectedMessageId !== this.state.message.id)) {
      const id = this.props.selectedMessageId;
      this.fetchMessage({id});

      return(
        <div className="MessageDetails">
          <span>Title</span><h1>{this.state.message.title}</h1>
          <span>Date</span><span>{this.state.message.sent}</span>
          <span>Body</span><span>{this.state.message.body}</span>
          <span>Sent by:</span><span>{this.state.message.sender}</span>
          <span>Reveived by:</span><span>{this.state.message.receiver}</span>
        </div>
      );
    } else {
      console.log("It is choosing not to do the get()")
      return null;
    }
  }
}


export default MessageDetails;