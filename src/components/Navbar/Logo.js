import React from 'react';
import clothes from '../../clothes.svg';

const Logo = () => {
	return (
		<div>
			<img src={clothes} alt="store" className="logo" />
		</div>
	);
};

export default Logo;
