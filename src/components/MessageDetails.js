import React, { Component } from 'react';
import axios from 'axios';

class MessageDetails extends Component {
  constructor(props) {
    super(props);

    this.state = {
      thisMessage: {}
    }
  }
  render() {
    axios.get(`/messages/${this.props.selectedMessageId}`)
    .then((response) => { 
      this.setState({thisMessage: response.data});
      console.log(this.state.thisMessage);
    })
    if (this.state.thisMessage.id) {
      return(
        <div className="MessageDetails">
          {/* {this.renderMessage()} */}
          <span>Title</span><h1>{this.state.thisMessage.title}</h1>
          <span>Date</span><p>{this.state.thisMessage.sent}</p>
          <span>Body</span><h6>{this.state.thisMessage.body}</h6>
          <span>Sent by:</span><h1>{this.state.thisMessage.sender}</h1>
          <span>Reveived by:</span><h1>{this.state.thisMessage.receiver}</h1>
        </div>
      )
    } else {
      return null;
    }
  }
}

export default MessageDetails;