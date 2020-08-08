import React from 'react';
import CartContentHeader from './CartContentHeader/CartContentHeader';
import CartContentItems from './CartContentItems/CartContentItems';

const CartContent = () => {
	return (
		<div className="cart-content">
			<CartContentHeader />
			<CartContentItems />
		</div>
	);
};

export default CartContent;
