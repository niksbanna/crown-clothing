import React from 'react';
import { connect } from 'react-redux';
import CheckoutItem from '../../Components/CheckoutItem/CheckoutItem';
import StripeButton from '../../Components/StripeButton/StripeButton';
import './Checkout.scss';

const Checkout = ({ selectCartItems, cartTotal }) => {
    return (
        <div className='checkout-page'>
            <div className="checkout-header">
                <div className="header-block">
                    <span>Product</span>
                </div>
                <div className="header-block">
                    <span>Description</span>
                </div>
                <div className="header-block">
                    <span>Quantity</span>
                </div>
                <div className="header-block">
                    <span>Price</span>
                </div>
                <div className="header-block">
                    <span>Remove</span>
                </div>
            </div>
            {
                selectCartItems.map(cartItem => {
                    return <CheckoutItem key={cartItem.id} cartItem={cartItem} />
                })
            }
            <div className="total">
                <span>TOTAL: ${cartTotal}</span>
            </div>
            <div className="test-warning">
                *Please use the following test credit cart for payments*
                <br />
                4242 4242 4242 4242 - Exp: 01/28 - CVV: 123
            </div>
            <StripeButton price={cartTotal} />
        </div>
    )
}

const mapStateToProps = ({ cart: { cartItems } }) => ({
    selectCartItems: cartItems,
    cartTotal: cartItems.reduce((
        (
            accumalatedValue, cartItem) => accumalatedValue + cartItem.quantity * cartItem.price
    )
        , 0)
});


export default connect(mapStateToProps)(Checkout);