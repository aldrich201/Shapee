import React from 'react'
import {connect} from 'react-redux'

import formatCurrency from '../../util'



const CartSummaryTotal = (props) => {
    let shippingFee = 0;
    props.cartTotal === 0 ? shippingFee = 0 : shippingFee = 50

    return (
        <div className="cart-summary-total">
            <hr />
            <div>Subtotal: {formatCurrency(props.cartTotal)} </div>
            <div>Shipping Fee: {formatCurrency(shippingFee)} </div>
            <div>Total: <strong>{formatCurrency(props.cartTotal + shippingFee)}</strong>  </div>
            <hr />
        </div>
    )
}

const mapStateToProps = state => {
    return {
        cartTotal: state.cartTotal
    }
}


export default connect(mapStateToProps, null)(CartSummaryTotal)
