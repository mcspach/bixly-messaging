import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Tab extends Component {
  render() {
    return (
      <Link to={`/${this.props.tabRoute}`}>
        <button className="BtnTab">
          {this.props.tabName}
        </button>
      </Link>
    )
  }
}

export default Tab;