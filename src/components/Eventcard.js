import React, {Component} from 'react';
import '../index.scss';

class component extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
				<div className={`event-card ${this.props.id}`}>
					<p>{this.props.date}</p>
					<p>{this.props.title}</p>
				</div>
		);
	}
}

export default component;