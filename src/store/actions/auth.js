import * as actionTypes from './actions';
import axios from 'axios'

export const authStart = () => {
	return {
		type: actionTypes.AUTH_START
	};
};

export const authSuccess = (authData) => {
	return {
		type: actionTypes.AUTH_SUCCESS,
		authData: authData
	};
};

export const authFail = (error) => {
	return {
		type: actionTypes.AUTH_FAIL,
		error: error
	};
};

export const auth = (firstName, lastName, email, password) => {
	return (dispatch) => {
		dispatch(authStart());
		axios.post('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyC07T2azvoPE9ZNFp13KEn6ihd5vfiGEVw')
	};
};
