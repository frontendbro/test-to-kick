import React, {Component} from 'react';
import '../index.scss';

class component extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
				<div className={`event-card ${this.props.id}`}>
					<p className='event-card__date'>{this.props.date}</p>
					<p className='event-card__title'>{this.props.title}</p>
				</div>
		);
	}
}

export default component;