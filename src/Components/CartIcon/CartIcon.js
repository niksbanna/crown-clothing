import React, { useMemo } from 'react';
import './CartIcon.scss';
import { ReactComponent as ShoppingIcon } from '../../Assests/shopping-bag.svg';
import { toggleCartHidden } from '../../Redux/Cart/CartActions';
import { connect } from 'react-redux';

const CartIcon = ({ toggleCartHidden, itemCount }) => {
    const countValue = useMemo(() => itemCount, [itemCount]);
    return (
        <div className='cart-icon' onClick={toggleCartHidden} >
            <ShoppingIcon className='shopping-icon' />
            <span className="item-count">{countValue}</span>
        </div>
    )
}
const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
});

const mapStateToProps = ({ cart: { cartItems } }) => ({
    itemCount: cartItems.reduce((
        (
            accumalatedValue, cartItems) => accumalatedValue + cartItems.quantity
    )
        , 0)
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CartIcon);
