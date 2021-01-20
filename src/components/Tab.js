import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Tab extends Component {
  render() {
    return (
      <button className="BtnTab">
        <Link to={`/${this.props.tabRoute}`}>
          {this.props.tabName}
        </Link>
      </button>
    )
  }
}

export default Tab;