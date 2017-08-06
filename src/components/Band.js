import React, { Component } from 'react';

class Band extends Component {

  handleOnClick = () => {
    this.props.store.dispatch({
      type: 'DELETE_BAND',
      id: this.props.band.id
    })
  }
  render() {
    console.log('from band',this.props)
    return(
        <li>{this.props.band.text} <button onClick={this.handleOnClick}/></li>
    );
  }
};

export default Band;
