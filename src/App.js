import React, { Component } from 'react';
import { hot } from 'react-hot-loader';

import Header from './components/Header';
import Content from './components/Content';
import Slider from './components/Slider';




class App extends Component {
	render() {
		return (
			<div className="main">
				<Header />
				<Content />
				<Slider />
			</div>
		);
	}
}

export default hot(module)(App);