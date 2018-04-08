import React, {Component} from 'react';
import '../index.scss';

import search from '../../public/images/ic-search.png';
import alarm from '../../public/images/ic-alarm.png';

class component extends Component {
	render() {
		return (
				<div className='menu'>
					<ul className='menu-list'>
						<li className='menu-list__item'>Houston</li>
						<li className='menu-list__item'>Categories</li>
						<li className='menu-list__item menu-list__item_active'>Explore</li>
					</ul>
					<div className='menu-search'>
						<img className='menu-search__search-icon' src={search} alt='search' width='16' height='16'/>
						<img src={alarm} alt='search' width='18' height='18'/>
					</div>
				</div>
		);
	}
}

export default component;