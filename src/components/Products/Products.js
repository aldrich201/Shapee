import React from 'react';
import formatCurrency from '../../util';

const Products = (props) => {
	return (
		<ul className="products">
			{props.products.map((product) => (
				<li key={product._id}>
					<div className="product">
						<a href={'#' + product._id}>
							<span className="image">
								<img src={product.image} alt={product.title} />
							</span>
						</a>
						<p className="product-title">{product.title}</p>
						<div className="product-price">
							<div>{formatCurrency(product.price)}</div>
							<button className="button-primary" onClick={() => props.addToCart(product)}>
								{' '}
								Add to Cart
							</button>
						</div>
					</div>
				</li>
			))}
		</ul>
	);
};

export default Products;
