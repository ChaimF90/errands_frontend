import React from 'react';

export default class NewErrandModal extends React.Component {
	render() {
		return (
			<div className="row">
				<div className="col-md-6">
					<div className="errand-modal-container">
						<div className="errand-modal-header">
							<span className="errand-modal-title">{`Add new category to the ${this.props.category} category`}</span>
							<span
							onClick={this.props.dismissModal} 
							className="glyphicon glyphicon-remove close-modal" 
							aria-hidden="true">
							</span>
						</div>
						<div className="errand-modal-body">
							<input
							name="title"
							value={this.props.errand.title}
							onChange={this.props.onChange}
							type="text"
							placeholder="Errand Title"
							className="new-errand-input" />
							<br />
							<textArea
							name="description"
							value={this.props.errand.description}
							onChange={this.props.onChange} 
							placeholder="Errand Description"
							className="new-errand-textarea" />
						</div>
						<div className="errand-modal-footer">
							<button onClick={this.props.saveErrand} className="save-btn">Save</button>
							<button className="cancel">Cancel</button>
						</div>
					</div>
				</div>
			</div>
		)
	}
}