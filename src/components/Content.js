import React, {Component} from 'react';
import '../index.scss';
import content from '../../public/images/illustration.png';

class component extends Component {
	render() {
		return (
				<div className='content'>
					<div className="content-box">
						<h2>Get rewarded <br/>for enjoying life!</h2>
						<p>Earn crypto tokens by having fun with friends</p>
						<button>Get Started</button>
					</div>
				</div>
		);
	}
}

export default component;