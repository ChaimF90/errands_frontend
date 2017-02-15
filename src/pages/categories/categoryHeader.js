import React from 'react';
import './header.css';

export default class CategoryHeader extends React.Component {
	render() {
		return (
			<div className='container'>
				<div className="row">
					<div className="col-md-12">
						<div className="header-container">
							<p className="header-header">Category Manager</p>
							<button onClick={this.props.popModal} className='btn new-cat-btn'>Add Category</button>
						</div>
					</div>
				</div>
			</div>
		)
	}
}