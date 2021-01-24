import React, { Component } from 'react';
import axios from 'axios';

class MessageDetails extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message: {}
    }
  }

  handleShowMessage(selectedMessageId) {
    axios.get(`/messages/${selectedMessageId}`)
    .then((response) => { 
      this.setState({message: response.data});
      console.log(this.state.message.title + ' details has updated state');
    })
  }

  componentDidMount() {
      this.handleShowMessage(this.props.selectedMessageId);
  };

  componentWillReceiveProps() {
    if (this.props.selectedMessageid !== this.state.message.id) {
      this.handleShowMessage(this.props.selectedMessageId);
    }
  };

  render() {

      return(
        <div className="MessageDetails">
          <p>Title: {this.state.message.title}</p>
          <p>Date: {this.state.message.sent}</p>
          <p>Body: {this.state.message.body}</p>
          <p>Sent by: {this.state.message.sender}</p>
          <p>Reveived by: {this.state.message.receiver}</p>
        </div>
      )
  }
}


export default MessageDetails;