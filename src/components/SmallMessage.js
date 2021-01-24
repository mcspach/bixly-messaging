import React, { Component } from 'react';
import axios from 'axios';

export default class SmallMessage extends Component {
  // props.title, body, message, id, sender, receiver, sent

  handleSelect = event => {
    event.preventDefault();
    if (event.currentTarget.classList.contains('Selected')) {
      event.currentTarget.classList.remove('Selected');
    } else {
    this.props.onSelect(event, this.props.id);
    }
  }

  handleDelete = event => {
    event.preventDefault();
    axios.delete(`/messages/${this.props.id}`);
    alert('You deleted a message.');
    this.props.onDelete(this.props.id);
  }

  render() {
    return(
      <li className="ListItem" onClick={this.handleSelect}>
        <p>{this.props.title}</p>
        <button onClick={this.handleDelete}>Delete</button>
      </li>
    )
  }
}

