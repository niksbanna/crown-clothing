import React from 'react';
import { connect } from 'react-redux';
import CartItem from '../CartItem/CartItem';
import CustonButton from '../Custom-button/CustonButton';
import './CartDropdown.scss';

const CartDropdown = ({ cartItems }) => {
    return (
        <div className='cart-dropdown'>
            <div className="cart-items">
                {
                    cartItems.map((cartItem) => (
                        <CartItem key={cartItem.id} item={cartItem} />
                    ))
                }
            </div>
            <CustonButton>GO TO CHECKOUT</CustonButton>
        </div>
    )
}
const mapStateToProps = ({ cart: { cartItems } }) => ({
    cartItems
})

export default connect(mapStateToProps)(CartDropdown);
