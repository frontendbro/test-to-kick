import React, {Component} from 'react';
import '../index.scss';

import Eventcard from './Eventcard';

class component extends Component {
	render() {
		return (
				<div className='slider'>
					<div className='slider-header'>
						<h3>Trending events</h3>
						<span>More</span>
					</div>
					<div className="slider-content">
						<Eventcard id='card1' date='Feb, 15' title='New Politics @ House of Blues'/>
						<Eventcard id='card2' date='Feb, 13' title='Grand Budapest Hotel'/>
						<Eventcard id='card3 event-card_long' date='Apr, 24' title='Romeo and Juliet'/>
						<Eventcard id='card4' date='Mar, 21' title='A$AP ROCKY' />
						<Eventcard id='card5 event-card_long' date='Apr, 07' title='Dieter Rams: Less is Better' />
						<Eventcard id='card6' date='Mar, 13-25' title='Carel Fabritius' />
					</div>
				</div>
		);
	}
}

export default component;