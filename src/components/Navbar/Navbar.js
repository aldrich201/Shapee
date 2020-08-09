import React from 'react';

import { Link } from 'react-router-dom';
import Logo from './Logo';
import CartLogo from '../Cart/CartLogo';
import AuthButton from '../Auth/AuthButton';

import BusinessName from './BusinessName';

const Navbar = () => {
	return (
		<div className="navbar">
			<Link to="/">
				<Logo />
			</Link>

			<Link to="/" style={{ textDecoration: 'none' }}>
				<BusinessName title="Shapee" />
			</Link>

			<Link to="/auth" style={{ marginLeft: 'auto' }}>
				<AuthButton />
			</Link>

			<CartLogo />
		</div>
	);
};

export default Navbar;
