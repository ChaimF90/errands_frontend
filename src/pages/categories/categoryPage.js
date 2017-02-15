import React from 'react';
import CategoryHeader from './categoryHeader';
import CategoryList from './categoryList';
import axios from 'axios';
import NewCategoryModal from './newCategoryModal';
import './mainPage.css';

export default class CategoryPage extends React.Component {
	constructor() {
		super();
		this.state = {
			categories: [],
			showModal: false,
			className: '',
			category: {
				name: ''
			}
		}
		this.deleteCategory = this.deleteCategory.bind(this);
		this.popModal = this.popModal.bind(this);
		this.hideModal = this.hideModal.bind(this);
		this.onChange = this.onChange.bind(this);
		this.save = this.save.bind(this);
	}
	componentDidMount() {
		this.getCategories();
	}

	async deleteCategory(id) {
		let token = localStorage.getItem('errandToken');
		let config = {
			headers: {'x-access-token': token},
		};
		let params = {
			id: id
		}
		await axios.post('http://localhost:4000/api/categories/deleteCategory', params, config);
		let categories = this.state.categories.filter(c => c.id !== id);
		this.setState({categories});
	}

	async getCategories() {
		let token = localStorage.getItem('errandToken');
		let config = {
			headers: {'x-access-token': token},
		};
		let categories = await axios.get('http://localhost:4000/api/categories/getAllCategories', config);
		this.setState({categories: categories.data});
	}

	popModal() {
		this.setState({showModal: true, className: 'behind-modal'});
	}

	hideModal() {
		this.setState({showModal: false, className: ''});
	}

	onChange(e) {
		let category = this.state.category;
		category[e.target.name] = e.target.value;
		this.setState({category});
	}

	async save() {
		let token = localStorage.getItem('errandToken');
		let config = {
			headers: {'x-access-token': token},
		};
		let newCat = await axios.post('http://localhost:4000/api/categories/newCategory',this.state.category, config);
		let categories = this.state.categories;
		categories.push(newCat.data);
		let category = this.state.category;
		category.name = '';
		this.setState({categories, showModal: false, className: '', category});
	}

	render() {
		let modal;
		if(this.state.showModal) {
			modal = <NewCategoryModal
			hideModal={this.hideModal}
			name={this.state.category.name}
			onChange={this.onChange}
			save={this.save} />
		}
		return (
			<div>
				{modal}	
				<div className={this.state.className}>
					<CategoryHeader
					popModal={this.popModal} />
					<CategoryList
					delete={this.deleteCategory} 
					items={this.state.categories} />
				</div>
			</div>
		)
	}
}