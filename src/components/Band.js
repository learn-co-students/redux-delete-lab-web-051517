import React, { Component } from 'react';

class Band extends Component {
  handleClick=()=>{
    this.props.store.dispatch({type:'DELETE_BAND', id:this.props.band.id})
  }
  render() {
    console.log('props',this.props.band.text)
    return(
      <li>
        {this.props.band.text}
        <button onClick={this.handleClick}>delete</button>
      </li>
    );
  }
};

export default Band;
