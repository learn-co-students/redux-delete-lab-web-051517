import React, { Component } from 'react';
import Band from './Band'

class Bands extends Component {

  render() {
    return(
      <ul>
        {this.props.store.getState().bands.map((bandInfo) => < Band band={bandInfo} store={this.props.store} /> )}
      </ul>
    );
  }
};

export default Bands;
