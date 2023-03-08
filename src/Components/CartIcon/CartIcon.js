import React from 'react';
import './CartIcon.scss';
import { ReactComponent as ShoppingIcon } from '../../Assests/shopping-bag.svg';
import { toggleCartHidden } from '../../Redux/Cart/CartActions';
import { connect } from 'react-redux';

const CartIcon = ({ toggleCartHidden }) => {
    return (
        <div className='cart-icon' onClick={toggleCartHidden} >
            <ShoppingIcon className='shopping-icon' />
            <span className="item-count">0</span>
        </div>
    )
}
const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
})
export default connect(
    null,
    mapDispatchToProps
)(CartIcon);
