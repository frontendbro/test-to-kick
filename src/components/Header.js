import React, {Component} from 'react';
import logo from '../../public/images/logo.png';
import search from '../../public/images/ic-search.png';
import alarm from '../../public/images/ic-alarm.png';
import '../index.scss';

import Menu from './Menu';

class component extends Component {
	render() {
		return (
				<div className='header'>
					<img src={logo} alt="logo" width="121" height="31"/>
					<Menu />
					<img src={search} alt="search" width="16" height="16"/>
					<img src={alarm} alt="search" width="18" height="18"/>
					<a href="#">Create event</a>
				</div>
		);
	}
}

export default component;
