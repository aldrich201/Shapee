import React from 'react';
import ShoppingCartTwoToneIcon from '@material-ui/icons/ShoppingCartTwoTone';

import { connect } from 'react-redux';
import * as actionTypes from '../../store/actions/actions';

const CartLogo = (props) => {
	return (
		<div className="cart-logo" onClick={props.onShowCart}>
			<ShoppingCartTwoToneIcon style={{ fontSize: 40, color: '#2D3A3A' }} />
		</div>
	);
};

const mapStateToProps = (state) => {
	return {
		showCart: state.showCart
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		onShowCart: () => dispatch({ type: actionTypes.SHOW_CART })
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(CartLogo);
