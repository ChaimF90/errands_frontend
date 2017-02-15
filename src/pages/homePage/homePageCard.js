import React from 'react';

export default class HomePageCard extends React.Component {
	createRow(e, i) {
		return (
			<li key={i} className="list-group-item errand">
				<span className="e-title">{e.title}</span>
				<p>{e.description}</p>
				<div className="errand-icons">
					<span onClick={this.props.markAsComplete.bind(null, e.id)} className="glyphicon glyphicon-ok errand-icon" aria-hidden="true"></span>
					<span onClick={this.props.popConfirmModal.bind(null, e.id)} className="glyphicon glyphicon-remove-sign errand-icon" aria-hidden="true"></span>
				</div>
			</li>
		)
	}
	render() {
		return (
			<div className="errand-container">
				<h4 className="errand-card-header">{this.props.cat.name}</h4>
				<ul className="list-group card-list">
				  {this.props.cat.errands.map((e, i) => this.createRow(e, i))}
				</ul>
				<span onClick={this.props.popModal.bind(null, this.props.cat.name, this.props.cat.id)} className="glyphicon glyphicon-plus add-errand" aria-hidden="true"></span>
			</div>
		)
	}
}