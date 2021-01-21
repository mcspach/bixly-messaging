import React, { Component } from 'react';
import axios from 'axios';

function SmallMessage(props) {
      // props.title,
      // props.body,
      // props.message,
      // props.id,
      // props.sender,
      // props.receiver

    return(
      <li>
        <p>props.title</p>
      </li>
    )
}


class MessageList extends Component {
  
  componentDidMount() {
    axios.get('/messages/')
      .then((response) => {
        console.log(response + response.data);
        response.data.map((message) => {
          <SmallMessage title={message.title} body={message.body} sender={message.sender} receiver={message.receiver} id={message.id} /> 
        })
      }
    );
  }

  render() {
    return(
      <div className="MessageList">
        Messages:
        <ul>
        </ul>
      </div>
    )
  }
}

export default MessageList;