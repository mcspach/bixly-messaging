import React, { Component } from 'react';
import axios from 'axios';

class MessageList extends Component {
  componentDidMount() {
    axios.get('messages/')
      .then((response) => {
        console.log(response);
        let messages = response.data;
        return messages;
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