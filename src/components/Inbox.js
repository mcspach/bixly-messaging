import React, { Component } from 'react';
import axios from 'axios';
import SmallMessage from './SmallMessage';

class Inbox extends Component {
  constructor(props) {
    super(props)
  this.state = {
    messages: [],
    selectedMessageId: props.selectedMessageId
    }
  }


  componentDidMount() {
    axios.get('/messages/')
      .then((response) => {
        this.setState({messages: response.data});
        }).catch(error =>
          console.log(error));
  }

  handleDelete = (messageId) => {
    const newMessages = this.state.messages.filter(thing => thing.id !== messageId);
    this.setState({ messages: newMessages });
  }
  
  handleSelect = (event, messageId) => {
    this.props.onSelect(messageId);
    let list = [...document.querySelectorAll(".ListItem")]
    list.forEach((item) => {
        item.classList.remove('Selected');
    })
    event.currentTarget.classList.add('Selected');
  }
  

  render() {
    const selectedMessageId = this.state.selectedMessageId;

    return(
      <div className="List">
        <h3>Inbox Messages</h3>
        <ul>
          {this.state.messages.map((message) => {
            return <SmallMessage 
              onSelect={this.handleSelect} 
              onDelete={this.handleDelete}
              selectedMessageId={selectedMessageId} 
              key={message.id} 
              title={message.title} 
              body={message.body} 
              sender={message.sender} 
              receiver={message.receiver} 
              id={message.id} />
          })}
        </ul>
      </div>
    )
  }
}

export default Inbox;