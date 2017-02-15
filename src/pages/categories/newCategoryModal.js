import React from 'react';
import './categoryModal.css';

export default class NewCategoryModal extends React.Component {
	render() {
		return (
			<div className="container cat-modal">
				<span onClick={this.props.hideModal} className="glyphicon glyphicon-remove" aria-hidden="true"></span>
				<div className="cat-modal-header">
					<span className="modal-span">Create new category</span>
				</div>
				<div className='cat-modal-body'>
					<div className="input-group">
					    <input
					    name="name"
					    value={this.props.name}
					    onChange={this.props.onChange} 
					    type="text" 
					    className="form-control" 
					    placeholder="Category" />
					    <span className="input-group-btn">
					    	<button onClick={this.props.save} className="btn btn-default" type="button">Save</button>
					    </span>
					</div>
				</div>
			</div>
		)
	}
}