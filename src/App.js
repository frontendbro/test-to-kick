import React, { Component } from 'react';
import { hot } from 'react-hot-loader';

import Header from './components/Header';
import Content from './components/Content';
import Filter from './components/Filter';
import Footer from './components/Footer';


class App extends Component {
	render() {
		return (
			<div className="wrapper">
				<Header />
				<Content />
				<Filter />
				<Footer />
			</div>
		);
	}
}

export default hot(module)(App);