import React, { Component } from 'react';
import axios from 'axios';

class MessageList extends Component {
  messages = [];

  componentDidMount() {
    axios.get('/messages/')
      .then((response) => {
        console.log(response);
      }
    );
  }

  render() {
    return(
      <div className="MessageList">
        Messages:
      </div>
    )
  }
}

export default MessageList;