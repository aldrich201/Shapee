import React from 'react';
import ShoppingCartTwoToneIcon from '@material-ui/icons/ShoppingCartTwoTone';

const CartLogo = (props) => {
	return (
		<div className="cart-logo" onClick={props.showCart}>
			<ShoppingCartTwoToneIcon style={{ fontSize: 40, color: '#2D3A3A' }} />
		</div>
	);
};

export default CartLogo;
