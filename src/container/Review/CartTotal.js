import React from 'react'
import formatCurrency from '../../util'
import {Link} from 'react-router-dom'

import {connect} from 'react-redux'


const CartTotal = (props) => {
    let shippingFee = 0;
    props.cartTotal === 0 ? shippingFee = 0 : shippingFee = 50

    return (
        <div className="cart-checkout-total">
            <div className="back-to-shopping">
                <Link to="/">
                    <button className="cart-checkout-button">
                        <div className="arrow">&larr;</div>
                        <div>Back to Shopping</div> 
                    </button>
                </Link>
            </div>

            <div className="cart-grand-total"><strong>Total: {formatCurrency(props.cartTotal + shippingFee)}</strong></div>

            <div className="proceed-to-checkout">
                <Link to ="/payment">
                    <button className="cart-checkout-button">
                        <div className="arrow">&rarr;</div>
                        <div>Proceed to Checkout</div>
                    </button>
                </Link>
                
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        cartTotal: state.cartTotal
    }
}

export default connect(mapStateToProps, null)(CartTotal)
