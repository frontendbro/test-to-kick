import React, { Component } from 'react';
import image from '../../public/images/Bunny.png';
import '../index.scss';

class component extends Component {
	render() {
		return (
			<div className='header'>
				<h1>Ad-apple</h1>
				<img src={image} /><br/>
			</div>
		);
	}
}

export default component;
