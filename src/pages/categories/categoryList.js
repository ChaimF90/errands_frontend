import React from 'react';
import './categoryList.css';

export default class CategoryList extends React.Component {
	createRow(c, i) {
		return (
			<li key={i} className="list-group-item cat">
				{c.name}
				<span onClick={this.props.delete.bind(null, c.id)} className='glyphicon glyphicon-remove delete-cat' aria-hidden="true"></span>
			</li>
		)
	}
	render() {
		return (
			<div className='category-list container'>
				<ul className="list-group">
					{this.props.items.map((c, i) => this.createRow(c, i))}
				</ul>
			</div>
		)
	}
}