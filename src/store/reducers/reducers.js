import * as actionTypes from '../actions/actions';
import data from '../../data.json';

const initialState = {
	products: data.products,
	size: '',
	sort: '',
	clothes: '',
	cartItems: [],
	showCart: false,
	cartTotal: 0
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		//adding and removing product
		case actionTypes.ADD_TO_CART:
			const cartItems = state.cartItems.slice();
			let alreadyInCart = false;
			let cartTotal = 0;

			//check if item is inside
			cartItems.forEach((item) => {
				if (item._id === action.product._id) {
					item.count += 1;
					item.total = item.count * item.price;

					alreadyInCart = true;
				}
			});

			//if in cart, turns alreadyInCart to true, so this will not run, if not in cart. This will run
			if (!alreadyInCart) {
				cartItems.push({ ...action.product, count: 1 });
			}

			cartItems.map((item) => (cartTotal += item.total));

			return {
				...state,
				cartItems: cartItems,
				showCart: !state.showCart,
				cartTotal: cartTotal
			};

		case actionTypes.REMOVE_FROM_CART:
			let removeTotal = state.cartTotal;
			let removedItem = state.cartItems.find((item) => item._id === action.id);

			removeTotal -= removedItem.price * removedItem.count;

			return {
				...state,
				cartItems: state.cartItems.filter((item) => item._id !== action.id),
				cartTotal: removeTotal
			};

		//sort and filter
		case actionTypes.SORT_PRODUCTS:
			return {
				...state,
				sort: action.value,
				products: data.products
					.slice()
					.sort(
						(a, b) =>
							action.value === 'lowest'
								? a.price > b.price ? 1 : -1
								: action.value === 'highest' ? (a.price < b.price ? 1 : -1) : a._id < b._id ? 1 : -1
					)
			};
		case actionTypes.FILTER_PRODUCTS:
			if (action.value === '') {
				return {
					...state,
					size: action.value,
					products: data.products
				};
			} else {
				return {
					...state,
					size: action.value,
					products: data.products.filter((product) => product.availableSizes.indexOf(action.value) >= 0)
				};
			}

		case actionTypes.FILTER_CLOTHES:
			return {
				...state,
				clothes: action.value,
				products: data.products.filter((product) => product.clothingType.indexOf(action.value) >= 0)
			};

		//show cart
		case actionTypes.SHOW_CART:
			return {
				...state,
				showCart: !state.showCart
			};

		//price related
		case actionTypes.INCREMENT:
			let incrementTempCart = [ ...state.cartItems ];
			let incrementTotal = 0;

			const selectedItem = incrementTempCart.find((item) => item._id === action.id);

			const index = incrementTempCart.indexOf(selectedItem);
			const product = incrementTempCart[index];
			product.count = product.count + 1;
			product.total = product.count * product.price;

			incrementTempCart.map((item) => (incrementTotal += item.total));

			return {
				...state,
				cartItems: [ ...incrementTempCart ],
				cartTotal: incrementTotal
			};

		case actionTypes.DECREMENT:
			let decrementTempCart = [ ...state.cartItems ];

			const selectedItem2 = decrementTempCart.find((item) => item._id === action.id);

			const index2 = decrementTempCart.indexOf(selectedItem2);
			const product2 = decrementTempCart[index2];
			product2.count = product2.count - 1;
			product2.total = product2.count * product2.price;

			//computation
			let removeTotal2 = state.cartTotal;
			removeTotal2 -= product2.price;

			if (product2.count === 0) {
				return {
					...state,
					cartItems: decrementTempCart.filter((item) => item._id !== action.id),
					cartTotal: removeTotal2
				};
			} else {
				return {
					...state,
					cartItems: [ ...decrementTempCart ],
					cartTotal: removeTotal2
				};
			}

		//default
		default:
			return state;
	}
};

export default reducer;
