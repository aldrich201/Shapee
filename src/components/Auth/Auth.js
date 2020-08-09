import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

import { connect } from 'react-redux';
import { auth, authStart, authSuccess, authFail } from '../../store/actions/auth';

import './Auth.css';

const Auth = (props) => {
	const formik = useFormik({
		initialValues: {
			firstName: '',
			lastName: '',
			email: '',
			password: ''
		},
		validationSchema: Yup.object({
			firstName: Yup.string()
				.required('This field is required')
				.max(20, 'First name must be 20 characters or less.'),
			lastName: Yup.string()
				.required('Last name is required')
				.max(20, 'Last name must be 20 characters of less.'),
			email: Yup.string().email('Invalid email address').required('Email is required'),
			password: Yup.string()
				.required('Please enter your password')
				.matches(
					/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
					'Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character'
				),
			confirmPassword: Yup.string()
				.required('Please confirm your password')
				.oneOf([ Yup.ref('password'), null ], 'Passwords must match')
		}),
		onSubmit: ({ firstName, lastName, email, password }) => {
			props.onAuth(firstName, lastName, email, password);
		}
	});

	return (
		<div className="signup">
			<form onSubmit={formik.handleSubmit} className="shipping-container">
				<label htmlFor="firstName">First Name</label>
				<input
					id="firstName"
					name="firstName"
					type="text"
					onChange={formik.handleChange}
					onBlur={formik.handleBlur}
					value={formik.values.firstName}
				/>
				{formik.touched.firstName && formik.errors.firstName ? (
					<div className="formik-errors">{formik.errors.firstName}</div>
				) : null}
				<label htmlFor="lastName">Last Name</label>
				<input
					id="lastName"
					name="lastName"
					type="text"
					onChange={formik.handleChange}
					onBlur={formik.handleBlur}
					value={formik.values.lastName}
				/>
				{formik.touched.lastName && formik.errors.lastName ? (
					<div className="formik-errors">{formik.errors.lastName}</div>
				) : null}
				<label htmlFor="email">E-mail</label>
				<input
					id="email"
					name="email"
					type="text"
					onChange={formik.handleChange}
					onBlur={formik.handleBlur}
					value={formik.values.email}
				/>
				{formik.touched.email && formik.errors.email ? (
					<div className="formik-errors">{formik.errors.email}</div>
				) : null}
				<label htmlFor="password">Password</label>
				<input
					id="password"
					name="password"
					type="password"
					onChange={formik.handleChange}
					onBlur={formik.handleBlur}
					value={formik.values.password}
				/>
				{formik.touched.password && formik.errors.password ? (
					<div className="formik-errors">{formik.errors.password}</div>
				) : null}
				<label htmlFor="confirmPassword">Confirm Password</label>
				<input
					id="confirmPassword"
					name="confirmPassword"
					type="password"
					onChange={formik.handleChange}
					onBlur={formik.handleBlur}
					value={formik.values.confirmPassword}
				/>
				{formik.touched.confirmPassword && formik.errors.confirmPassword ? (
					<div className="formik-errors">{formik.errors.confirmPassword}</div>
				) : null}

				<button type="submit" className="formik-submit">
					Submit
				</button>
			</form>
		</div>
	);
};

const mapDispatchToProps = (dispatch) => {
	return {
		onAuth: (firstName, lastName, email, password) => dispatch(auth(firstName, lastName, email, password))
	};
};

export default connect(null, mapDispatchToProps)(Auth);
