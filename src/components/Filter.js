import React, { Component } from 'react';
import '../index.scss';

class component extends Component {
	render() {
		return (
			<div className='filter'>
				<h3>filter</h3>
				<ul>
					<li>
						<p>Сортировать по Городу</p>
					</li>
					<li>
						<p>Сортировать по Модели</p>
					</li>
					<li>
						<p>Сортировать по Цене</p>
					</li>
					<li>
						<p>Сортировать по Дате объявления</p>
					</li>
					<li>
						<p>xxx</p>
					</li>
				</ul>
			</div>
		);
	}
}

export default component;
