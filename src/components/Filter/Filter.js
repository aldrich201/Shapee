import React, { Component } from 'react';

export default class Filter extends Component {
	render() {
		return (
			<div className="filter">
				<div className="filter-result">{this.props.count} Products</div>
				<div className="filter-type">
					Clothing {' '}
					<select className="select" value={this.props.clothes} onChange={this.props.filterClothes}>
						<option value="dress">Dress</option>
						<option value="jeans">Jeans</option>
						<option value="top">Top</option>
					</select>
				</div>
				<div className="filter-sort">
					Sort By {' '}
					<select className="select" value={this.props.sort} onChange={this.props.sortProducts}>
						<option>Latest</option>
						<option value="highest">Highest</option>
						<option value="lowest">Lowest</option>
					</select>
				</div>
				<div className="filter-size">
					Filter By {' '}
					<select className="select" value={this.props.size} onChange={this.props.filterProducts}>
						<option value="">All</option>
						<option value="XS">XS</option>
						<option value="S">S</option>
						<option value="M">M</option>
						<option value="L">L</option>
						<option value="XL">XL</option>
						<option value="XXL">XXL</option>
					</select>
				</div>
			</div>
		);
	}
}
