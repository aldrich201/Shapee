import React, { Fragment } from 'react'
import { useFormik } from 'formik';
import * as Yup from 'yup';

import './Shipping.css'

const ShippingContent = () => {
    const formik = useFormik({
        initialValues: {
          firstName: '',
          lastName:'',
          streetAddress:'',
          city:'',
          postalCode:'',
          mobileNumber:'',
        },
        validationSchema: Yup.object({
            firstName: Yup.string()
                .max(20, 'Must be 20 characters or less')
                .required('This field is required'),
            lastName: Yup.string()
                .max(20, 'Must be 20 characters or less')
                .required('This field is required'),
            streetAddress: Yup.string()
                .required('This field is required')
                .max(50, 'Must be 50 characters or less'),
            city: Yup.string()
                .required('This field is required')
                .max(20, 'Must be 20 characters or less'),
            postalCode: Yup.string()
                .required('This field is required')
                .max(6, 'Must be 6 characters or less'),
            mobileNumber: Yup.string()
                .required('This field is required')
                .max(20, 'Must be 20 characters or less'),
        }),
        onSubmit: values => {
          alert(JSON.stringify(values, null, 2));
        },
      });
    return (
        <Fragment>
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
                {formik.touched.firstName && formik.errors.firstName ? <div className="formik-errors">{formik.errors.firstName}</div> : null}
                <label htmlFor="lastName">Last Name</label>
                <input
                    id="lastName"
                    name="lastName"
                    type="text"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.lastName}
                />
                {formik.touched.lastName && formik.errors.lastName ? <div className="formik-errors">{formik.errors.lastName}</div> : null}
                <label htmlFor="streetAddress">Street Address</label>
                <input
                    id="streetAddress"
                    name="streetAddress"
                    type="text"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.streetAddress}
                />
                {formik.touched.streetAddress && formik.errors.streetAddress ? <div className="formik-errors">{formik.errors.streetAddress}</div> : null}
                <label htmlFor="city">City</label>
                <input
                    id="city"
                    name="city"
                    type="text"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.city}
                />
                {formik.touched.city && formik.errors.city ? <div className="formik-errors">{formik.errors.city}</div> : null}
                <label htmlFor="postalCode">Postal Code</label>
                <input
                    id="postalCode"
                    name="postalCode"
                    type="text"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.postalCode}
                />
                {formik.touched.postalCode && formik.errors.postalCode ? <div className="formik-errors">{formik.errors.postalCode}</div> : null}
                <label htmlFor="mobileNumber">Mobile Number</label>
                <input
                    id="mobileNumber"
                    name="mobileNumber"
                    type="text"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.mobileNumber}
                />
                {formik.touched.mobileNumber && formik.errors.mobileNumber ? <div className="formik-errors">{formik.errors.mobileNumber}</div> : null}
                <button type="submit" className="formik-submit">Submit</button>
            </form>
        </Fragment>
    )
}

export default ShippingContent