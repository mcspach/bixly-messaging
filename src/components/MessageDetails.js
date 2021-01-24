import React, { Component } from 'react';
import axios from 'axios';

class MessageDetails extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message: null,
      error: false
    }
  }

  handleShowMessage(selectedMessageId) {
    axios.get(`/messages/${selectedMessageId}`)
    .then((response) => { 
      this.setState({message: response.data});
    }).catch((error => {
      this.setState({error: true})
    }))
  }

  componentDidMount() {
    if ( this.props.selectedMessageId ) {
      this.handleShowMessage(this.props.selectedMessageId);
    }
  };

  componentDidUpdate() {
    if ( this.props.selectedMessageId ) {
      if ( !this.state.message || (this.state.message && this.props.selectedMessageId !== this.state.message.id)) {
        this.handleShowMessage(this.props.selectedMessageId);
      }
    }
  };

  render() {
      let details = <div><p>Hello</p><p>click on a message from the list to view details</p></div>
      if (!this.state.error && this.state.message) {
       details = (<div className="MessageDetails">
        <h3>Title: {this.state.message.title}</h3>
        <p><strong>Body:</strong> {this.state.message.body}</p>
        <p>Sent by: {this.state.message.sender}</p>
        <p>Reveived by: {this.state.message.receiver}</p>
        <p>Timestamp: {this.state.message.sent}</p>
      </div> 
      );
    }
  return details;
  }
}


export default MessageDetails;