import React from 'react';
import * as actionTypes from '../../store/actions/actions';
import { connect } from 'react-redux';

const Filter = (props) => {
	return (
		<div className="filter">
			<div className="filter-result">{props.count} Products</div>
			<div className="filter-type">
				Clothing {' '}
				<select
					className="select"
					value={props.clothes}
					onChange={(e) => props.onFilterClothes(e.target.value)}
				>
					<option value="dress">Dress</option>
					<option value="jeans">Jeans</option>
					<option value="top">Top</option>
				</select>
			</div>
			<div className="filter-sort">
				Sort By {' '}
				<select className="select" value={props.sort} onChange={(e) => props.onSortProducts(e.target.value)}>
					<option>Latest</option>
					<option value="highest">Highest</option>
					<option value="lowest">Lowest</option>
				</select>
			</div>
			<div className="filter-size">
				Filter By {' '}
				<select className="select" value={props.size} onChange={(e) => props.onFilterProducts(e.target.value)}>
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
};

const mapStateToProps = (state) => {
	return {
		size: state.size,
		sort: state.sort,
		clothes: state.clothes,
		count: state.products.length
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		onFilterProducts: (value) => dispatch({ type: actionTypes.FILTER_PRODUCTS, value: value }),
		onSortProducts: (value) => dispatch({ type: actionTypes.SORT_PRODUCTS, value: value }),
		onFilterClothes: (value) => dispatch({ type: actionTypes.FILTER_CLOTHES, value: value })
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
