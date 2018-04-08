import React, {Component} from 'react';
import '../index.scss';

class component extends Component {
	render() {
		return (
				<div className='content'>
					<div className='content-wrapper'>
						<div className='content-action'>
							<h2>Get rewarded <br/>for enjoying life!</h2>
							<p>Earn crypto tokens by having fun with friends</p>
							<button className='content-action__button'>Get Started</button>
						</div>
					</div>
				</div>
		);
	}
}

export default component;