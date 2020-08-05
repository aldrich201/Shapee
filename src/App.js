import React, { Component } from 'react';
import './App.css';

import Navbar from './components/Navbar/Navbar';
import CarouselComponent from './components/Carousel/Carousel';
import Products from './components/Products/Products';
import Footer from './components/Footer/Footer';
import LatestProducts from './components/LatestProducts/LatestProducts';
import Filter from './components/Filter/Filter';
import CartModal from './components/Cart/CartModal.js';

import { connect } from 'react-redux';

class App extends Component {
	// state = {
	// 	products: data.products,
	// 	size: '',
	// 	sort: '',
	// 	clothes: '',
	// 	cartItems: [],
	// 	showCart: false,
	// 	cartTotal: 0
	// };

	// addToCart = (product) => {
	// 	const cartItems = this.state.cartItems.slice();
	// 	let alreadyInCart = false;

	// 	//check if item is inside
	// 	cartItems.forEach((item) => {
	// 		if (item._id === product._id) {
	// 			item.count += 1;
	// 			item.total = item.count * item.price;

	// 			alreadyInCart = true;
	// 		}
	// 	});

	// 	//if in cart, turns alreadyInCart to true, so this will not run, if not in cart. This will run
	// 	if (!alreadyInCart) {
	// 		cartItems.push({ ...product, count: 1 });
	// 	}

	// 	this.setState(
	// 		{
	// 			cartItems: cartItems
	// 		},
	// 		() => {
	// 			this.addTotal();
	// 		}
	// 	);
	// };

	// sortProducts = (event) => {
	// 	const sort = event.target.value;
	// 	this.setState((state) => ({
	// 		sort: sort,
	// 		products: this.state.products
	// 			.slice()
	// 			.sort(
	// 				(a, b) =>
	// 					sort === 'lowest'
	// 						? a.price > b.price ? 1 : -1
	// 						: sort === 'highest' ? (a.price < b.price ? 1 : -1) : a._id < b._id ? 1 : -1
	// 			)
	// 	}));
	// };

	// filterProducts = (event) => {
	// 	if (event.target.value === '') {
	// 		this.setState({ size: event.target.value, products: data.products });
	// 	} else {
	// 		this.setState({
	// 			size: event.target.value,
	// 			products: data.products.filter((product) => product.availableSizes.indexOf(event.target.value) >= 0)
	// 		});
	// 	}
	// };

	// filterClothes = (event) => {
	// 	this.setState({
	// 		clothes: event.target.value
	// 	});
	// };

	// showCart = () => {
	// 	this.setState({
	// 		showCart: !this.state.showCart
	// 	});
	// };

	// removeFromCart = (id) => {
	// 	this.setState(
	// 		{
	// 			cartItems: this.state.cartItems.filter((item) => item._id !== id)
	// 		},
	// 		() => this.addTotal()
	// 	);
	// };

	// increment = (id) => {
	// 	let tempCart = [ ...this.state.cartItems ];

	// 	const selectedItem = tempCart.find((item) => item._id === id);

	// 	const index = tempCart.indexOf(selectedItem);
	// 	const product = tempCart[index];
	// 	product.count = product.count + 1;
	// 	product.total = product.count * product.price;
	// 	this.addTotal();

	// 	this.setState({
	// 		cartItems: [ ...tempCart ]
	// 	});
	// };

	// decrement = (id) => {
	// 	let tempCart = [ ...this.state.cartItems ];

	// 	const selectedItem = tempCart.find((item) => item._id === id);

	// 	const index = tempCart.indexOf(selectedItem);
	// 	const product = tempCart[index];
	// 	product.count = product.count - 1;
	// 	product.total = product.count * product.price;

	// 	this.addTotal();

	// 	if (product.count === 0) {
	// 		this.removeFromCart(id);
	// 	} else {
	// 		this.setState({
	// 			cartItems: [ ...tempCart ]
	// 		});
	// 	}
	// };

	// addTotal = () => {
	// 	let cartItems = [ ...this.state.cartItems ];
	// 	let total = 0;

	// 	cartItems.map((item) => (total += item.total));

	// 	this.setState({
	// 		cartTotal: total
	// 	});
	// };

	render() {
		let cartModal = this.props.showCart ? <CartModal /> : null;

		return (
			<div className="container">
				<Navbar />
				<CarouselComponent />
				<LatestProducts />
				<Filter />
				<Products />
				{/* make this cart as a modal */}
				<Footer />
				{cartModal}
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		products: state.products,
		showCart: state.showCart
	};
};

export default connect(mapStateToProps)(App);
