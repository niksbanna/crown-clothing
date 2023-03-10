import React, { useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { connect } from 'react-redux';
import CartItem from '../CartItem/CartItem';
import CustonButton from '../Custom-button/CustonButton';
import './CartDropdown.scss';

const CartDropdown = ({ cartItems }) => {
    const memoizedCartItems = useMemo(() => cartItems, [cartItems]);
    const navigate = useNavigate();

    return (
        <div className='cart-dropdown'>
            <div className="cart-items">
                {
                    memoizedCartItems.length ?
                        memoizedCartItems.map((cartItem) => (
                            <CartItem key={cartItem.id} item={cartItem} />
                        ))
                        : <span className="empty-message">Your cart is empty</span>
                }
            </div>
            <CustonButton onClick={() => navigate('/checkout')} >GO TO CHECKOUT</CustonButton>
        </div>
    )
}
const mapStateToProps = ({ cart: { cartItems } }) => ({
    cartItems
})

export default connect(mapStateToProps)(CartDropdown);
