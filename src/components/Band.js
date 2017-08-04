import React, { Component } from 'react';

class Band extends Component {

  handleOnDelete = () => {
    this.props.store.dispatch({
      type: 'DELETE_BAND',
      id: this.props.band.id
    })
  }

  render() {
    return(
      <li>
        <p>{this.props.band.text}</p>
        <button onClick={this.handleOnDelete}>Delete Band</button>
      </li>
    );
  }
};

export default Band;
