import React, { Fragment } from 'react';
import formatCurrency from '../../../util';
import '../Checkout.css'

import * as actionTypes from '../../../store/actions/actions'

import { connect } from 'react-redux';

const CartContentItems = (props) => {
	return (
		<Fragment>
			{props.cartItems.length === 0 ? (
				<div className="cart-empty-2"> Cart is Empty </div>
			) : (
				<Fragment>
					{props.cartItems.map((item) => (
						<Fragment>
							<div className="cart-content-image">
								<img src={item.image} alt={item.title} className="cart-content-photo" />
							</div>

							<div className="cart-content-title">{item.title} </div>

							<div className="cart-content-add">
								<div>
									<button className="decrement-1" onClick={() => props.decrement(item._id)}>
										-
									</button>
								</div>
								
								<div className="cart-count">{item.count}</div>
								<div>
									<button className="increment-1" onClick={() => props.increment(item._id)}>
										+
									</button>
								</div>
								
							</div>

							<div className="cart-content-total">{formatCurrency(item.total)} </div>
						</Fragment>
					))}
				</Fragment>
			)}
		</Fragment>
	);
};

const mapStateToProps = (state) => {
	return {
		cartItems: state.cartItems
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		increment: (id) => dispatch({ type: actionTypes.INCREMENT, id: id}),
		decrement: (id) => dispatch({ type: actionTypes.DECREMENT, id: id}),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(CartContentItems);
