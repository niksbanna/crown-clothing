import React from 'react';
import { connect } from 'react-redux';
import { addItem } from '../../Redux/Cart/CartActions';
import CustonButton from '../Custom-button/CustonButton';
import './CollectionItem.scss'

const CollectionItem = ({ item, addItem }) => {
    const { name, price, imageUrl } = item;
    return (
        <div className='collection-item'>
            <div
                className="image"
                style={{
                    backgroundImage: `url(${imageUrl})`
                }}
            />
            <div className="collection-footer">
                <div className="name">{name}</div>
                <div className="price">${price}</div>
            </div>
            <CustonButton onClick={() => addItem(item)} inverted> Add to cart </CustonButton>

        </div>
    )
}
const mapDispatchToProps = dispatch => ({
    addItem: item => dispatch(addItem(item))
})
export default connect(null, mapDispatchToProps)(CollectionItem);