import React, { Component } from 'react';
import axios from 'axios';
import SmallMessage from './SmallMessage';

class Outbox extends Component {
  constructor(props) {
    super(props)
  this.state = {
    messages: []
  }
}

  // renderList = () => {
  //     if (this.props.tabName === 'received') {
  //       this.setState({currentTab: this.state.messages.filter(m => m.receiver === 'test')});
  //       console.log(this.state.currentTab);
  //     } else if (this.props.tabName === 'sent') { 
  //       this.setState({currentTab: this.state.messages.filter(m => m.sender === 'test')});
  //       console.log(this.state.currentTab);
  //     } else {
  //       return null;
  //     }
  // }

  componentDidMount() {
    axios.get('/messages/')
      .then((response) => {
        console.log(response.data);
        this.setState({messages: response.data});
        console.log(this.state.messages);
        });
      }
  

  render() {
    return(
      <div className="List">
        <h3>Messages</h3>
        <ul>
          {this.state.messages.map((message) => {
            return <SmallMessage key={message.id} title={message.title} body={message.body} sender={message.sender} receiver={message.receiver} id={message.id} />
          })}
        </ul>
      </div>
    )
  }
}

export default Outbox;