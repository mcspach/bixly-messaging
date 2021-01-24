import React, { Component } from 'react';
import axios from 'axios';

class MessageDetails extends Component {
  constructor(props) {
    super(props);

    this.state = {
      thisMessage: {}
    }
  }

  handleShowMessage(selectedMessageId) {
    axios.get(`/messages/${selectedMessageId}`)
    .then((response) => { 
      this.setState({thisMessage: response.data});
      console.log(this.state.thisMessage.title + 'details has updated state');
    })
  }

  componentDidMount() {
    if (this.state.thisMessage) {
      this.handleShowMessage(this.props.selectedMessageId);
    }
  };

  componentWillReceiveProps() {
    if ((this.state.thisMessage !== {}) && (this.props.selectedMessageid !== this.state.thisMessage.id)) {
      this.handleShowMessage(this.props.selectedMessageId);
    }
  };

  render() {
      return(
        <div className="MessageDetails">
          <p>Title: {this.state.thisMessage.title}</p>
          <p>Date: {this.state.thisMessage.sent}</p>
          <p>Body: {this.state.thisMessage.body}</p>
          <p>Sent by: {this.state.thisMessage.sender}</p>
          <p>Reveived by: {this.state.thisMessage.receiver}</p>
        </div>
      )
  }
}

export default MessageDetails;