import React from 'react'

export default class ConfirmModal extends React.Component {
	render() {
		return (
			<div className="confirm-modal">
				<span className="confirm-header">Delete errand?</span>
				<br />
				<button onClick={this.props.yesClick} className="yes-btn">Yes</button>
				<br />
				<button onClick={this.props.cancelClick} className="cancel-btn">cancel</button>
			</div>
		)
	}
}