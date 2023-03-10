import React from 'react';
import { connect } from 'react-redux';
import CheckoutItem from '../../Components/CheckoutItem/CheckoutItem';
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
                <span>TOTAL:  &#x20B9;{cartTotal}</span>
            </div>
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