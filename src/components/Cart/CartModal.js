import React, { Fragment } from 'react';
import formatCurrency from '../../util';
import * as actionTypes from '../../store/actions/actions';
import { connect } from 'react-redux';

const CartModal = (props) => {
	return (
		<Fragment>
			<div className="cart-modal" onClick={props.onShowCart} />
			<div className="cart">
				<div className="x-button" onClick={props.onShowCart}>
					X
				</div>
				{props.cartItems.length === 0 ? (
					<div className="cart-empty"> Cart is Empty </div>
				) : (
					<div className="not-empty">
						<ul>
							{props.cartItems.map((item) => (
								<li className="cart-items" key={item._id}>
									<img src={item.image} alt={item.title} />
									<div className="cart-title">{item.title} </div>
									<div className="cart-price">{formatCurrency(item.total)} </div>
									<button className="decrement" onClick={() => props.decrement(item._id)}>
										-
									</button>
									<div className="cart-count">{item.count}</div>
									<button className="increment" onClick={() => props.increment(item._id)}>
										+
									</button>
									<button className="cart-button" onClick={() => props.onRemoveFromCart(item._id)}>
										Remove
									</button>
								</li>
							))}
						</ul>

						<div className="total-subtotal">
							<div className="subtotal">Total: </div>
							<div className="total">{formatCurrency(props.cartTotal)} </div>
						</div>
						<button className="checkout-button">Proceed to Checkout</button>
					</div>
				)}
			</div>
		</Fragment>
	);
};

const mapStateToProps = (state) => {
	return {
		showCart: state.showCart,
		cartItems: state.cartItems,
		cartTotal: state.cartTotal
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		onShowCart: () => dispatch({ type: actionTypes.SHOW_CART }),
		onRemoveFromCart: (id) => dispatch({ type: actionTypes.REMOVE_FROM_CART, id: id }),
		increment: (id) => dispatch({ type: actionTypes.INCREMENT, id: id }),
		decrement: (id) => dispatch({ type: actionTypes.DECREMENT, id: id })
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(CartModal);
