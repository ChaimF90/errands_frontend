import React from 'react';
import axios from 'axios';
import HomePageCard from './homePageCard';
import NewErrandModal from './newErrandModal';
import ConfirmModal from './confirmModal';

export default class HomePage extends React.Component {
	constructor() {
		super();
		this.state = {
			categories: [],
			showModal: false,
			category: '',
			errand: {
				title: '',
				description: '',
				categoryId: ''
			},
			showConfirmModal: false
		}
		this.popModal = this.popModal.bind(this);
		this.dismissModal = this.dismissModal.bind(this);
		this.onChange = this.onChange.bind(this);
		this.saveErrand = this.saveErrand.bind(this);
		this.markAsComplete = this.markAsComplete.bind(this);
		this.popConfirmModal = this.popConfirmModal.bind(this);
		this.yesClick = this.yesClick.bind(this);
		this.cancelClick = this.cancelClick.bind(this);
		this.errandToDeleteId = 0;
	}

	componentDidMount() {
		this.getCategories();
	}

	createRow(c, i) {
		return (
			<div key={i}>
				<HomePageCard
				popConfirmModal={this.popConfirmModal}
				markAsComplete={this.markAsComplete} 
				popModal={this.popModal} 
				cat={c} />
			</div>
		)
	}

	async getCategories() {
		let token = localStorage.getItem('errandToken');
		let config = {
			headers: {'x-access-token': token},
		};
		let response = await axios.get('http://localhost:4000/api/categories/getAllCategories', config);
		console.log(response.data);
		this.setState({categories: response.data});
	}

	popModal(val, id) {
		let errand = this.state.errand;
		errand.categoryId = id;
		this.setState({showModal: true, category: val, errand});
	}

	dismissModal() {
		this.setState({showModal: false}, () => {
			this.clearModal();
		});
	}

	onChange(e) {
		let errand = this.state.errand;
		errand[e.target.name] = e.target.value;
		this.setState({errand});
	}

	async saveErrand() {
		let token = localStorage.getItem('errandToken');
		let config = {
			headers: {'x-access-token': token},
		};
		await axios.post('http://localhost:4000/api/errands/newErrand', this.state.errand, config);
		this.getCategories();
		this.dismissModal();
	}

	clearModal() {
		let errand = this.state.errand;
		errand.title = '';
		errand.description = '';
		errand.categoryId = '';
		this.setState({errand});
	}

	async markAsComplete(id) {
		let token = localStorage.getItem('errandToken');
		let config = {
			headers: {'x-access-token': token},
		};
		await axios.post('http://localhost:4000/api/errands/completeErrand', {id}, config);
		this.getCategories();
	}

	async deleteErrand(id) {
		let token = localStorage.getItem('errandToken');
		let config = {
			headers: {'x-access-token': token},
		};
		await axios.post('http://localhost:4000/api/errands/deleteErrand', {id}, config);
		this.getCategories();
	}

	popConfirmModal(id) {
		this.setState({showConfirmModal: true});
		this.errandToDeleteId = id;
	}

	yesClick() {
		this.deleteErrand(this.errandToDeleteId);
		this.setState({showConfirmModal: false});
	}

	cancelClick() {
		this.setState({showConfirmModal: false});
	}

	render() {
		let modal;
		if(this.state.showModal) {
			modal = 
			<NewErrandModal
			saveErrand={this.saveErrand}
			onChange={this.onChange}
			errand={this.state.errand} 
			category={this.state.category} 
			dismissModal={this.dismissModal} />
		}

		let confirmModal;
		if(this.state.showConfirmModal) {
			confirmModal = 
			<ConfirmModal
			yesClick={this.yesClick}
			cancelClick={this.cancelClick} />
		}

		return (
			<div className="container">
				{modal}
				{confirmModal}
				<div className="col-md-12">
					{this.state.categories.map((c, i) => this.createRow(c, i))}
				</div>
			</div>
		)
	}
}