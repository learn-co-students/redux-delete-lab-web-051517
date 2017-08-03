import React, { Component } from 'react';

class Band extends Component {

  handleClick = () => {
    let action = {
      type: 'DELETE_BAND',
      id: this.props.band.id
    }
    this.props.store.dispatch(action)
  }


  render() {
    return(
        <li>
        <button onClick={this.handleClick}> {this.props.band.text} </button>
        </li>
    );
  }
};

export default Band;
