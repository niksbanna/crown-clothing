import React from 'react';
import CustonButton from '../Custom-button/CustonButton';
import './CartDropdown.scss';

export default function CartDropdown() {
    return (
        <div className='cart-dropdown'>
            <div className="cart-items">
                <CustonButton>GO TO CHECKOUT</CustonButton>
            </div>
        </div>
    )
}
