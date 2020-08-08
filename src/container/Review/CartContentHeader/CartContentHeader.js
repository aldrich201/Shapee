import React, { Fragment } from 'react';

const CartContentHeader = () => {
	return (
		<Fragment>
			<div className="header-photo">Photo</div>
			<div className="header-description">Description</div>
			<div className="header-add" />
			<div className="header-total">Total</div>
		</Fragment>
	);
};

export default CartContentHeader;
