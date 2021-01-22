import React, { Component } from 'react';
import axios from 'axios';

export default class SmallMessage extends Component {
  // props.title,
  // props.body,
  // props.message,
  // props.id,
  // props.sender,
  // props.receiver

  handleSelect = event => {
    event.preventDefault();
  }

  handleDelete = event => {
  event.preventDefault();
  //
  axios.delete(`/messages/${this.props.id}`)
    .then(response => {
      console.log(response);
      console.log(response.data);
      this.props.onDelete(this.props.id);
    })

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

