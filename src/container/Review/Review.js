import React from 'react';
import { connect } from 'react-redux';

import './Checkout.css';
import CartSummary from './CartSummary';
import ShippingAddress from './ShippingAddress';
import CartContent from './CartContent';
import CartSummaryTotal from './CartSummaryTotal';

import CartTotal from './CartTotal';
import ShippingContent from './ShippingContent/ShippingContent';
import StepProgressBar from './ProgressBar';

const Checkout = () => {
	return (
		<div className="checkout-container">
			<StepProgressBar />
			<CartSummary />
			<CartContent />
			<CartSummaryTotal />
			<ShippingAddress />
			<ShippingContent />
			<CartTotal />
		</div>
	);
};

const mapStateToProps = (state) => {
	return {};
};

const mapDispatchToProps = (dispatch) => {
	return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Checkout);
