import React from 'react';
import formatCurrency from '../../util';

import { connect } from 'react-redux';
import * as actionTypes from '../../store/actions/actions';

const Products = (props) => {
	return (
		<ul className="products">
			{props.products.map((product) => (
				<li key={product._id}>
					<div className="product">
						<a href={'#' + product._id}>
							<span className="image">
								<img src={product.image} alt={product.title} />
							</span>
						</a>
						<p className="product-title">{product.title}</p>
						<div className="product-price">
							<div>{formatCurrency(product.price)}</div>
							<button className="button-primary" onClick={() => props.onAddToCart(product)}>
								{' '}
								Add to Cart
							</button>
						</div>
					</div>
				</li>
			))}
		</ul>
	);
};

const mapStateToProps = (state) => {
	return {
		products: state.products
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		onAddToCart: (product) => dispatch({ type: actionTypes.ADD_TO_CART, product: product })
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Products);
