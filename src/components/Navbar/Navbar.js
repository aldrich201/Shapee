import React from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo';
import CartLogo from '../Cart/CartLogo';

import BusinessName from './BusinessName';

const Navbar = (props) => {
	return (
		<div className="navbar">
			<Link to="/">
				<Logo />
			</Link>

			<Link to="/" style={{ textDecoration: 'none' }}>
				<BusinessName title="Shapee" />
			</Link>

			<CartLogo showCart={props.showCart} />
		</div>
	);
};

export default Navbar;
