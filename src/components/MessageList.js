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
      <li className="ListItem">
        <p>{props.title}</p>
      </li>
    )
}


class MessageList extends Component {
  constructor(props) {
    super(props)
  this.state = {
    messages: [],
    currentTab: []
  }
}

  renderList = () => {
      if (this.props.tabName === 'received') {
        this.setState({currentTab: this.state.messages.filter(m => (m.receiver === 'test'))})
        console.log(this.state.currentTab);
      } else if (this.props.tabName === 'sent') { 
        this.setState({currentTab: this.state.messages.filter(m => (m.sender === 'test'))})
        console.log(this.state.currentTab);
      } else {
        return null;
      }
  }

  componentDidMount() {
    axios.get('/messages/')
      .then((response) => {
        console.log(response.data);
        this.setState({messages: response.data});
        console.log(this.state.messages)
        this.renderList();
        });
      }
  

  render() {
    return(
      <div className="List">
        <p>Messages</p>
        <ul>
          {this.state.currentTab.map((message) => {
            return <SmallMessage key={message.id} title={message.title} body={message.body} sender={message.sender} receiver={message.receiver} id={message.id} />
          })}
        </ul>
      </div>
    )
  }
}

export default MessageList;