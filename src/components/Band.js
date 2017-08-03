import React, { Component } from 'react';

class Band extends Component {
	constructor(props) {
		super(props)
	}

	handleOnClick = () => {
		this.props.store.dispatch({
			type: 'DELETE_BAND',
			id: this.props.band.id
		});
	}

	render() {
    return(
			<li key={this.props.band.key}>
				<p>Text: {this.props.band.text}</p>
				<button onClick={this.handleOnClick} />
			</li>
    );
  }
};

export default Band;
