import React from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import CollectionItem from '../../Components/Collection-item/CollectionItem';
import './Collection.scss';

const CollectionPage = ({ collections }) => {
    let { categoryId } = useParams();

    const collection = collections ? collections[categoryId] : null;
    const { title, items } = collection;
    return (
        <div className='collection-page'>
            <h2 className='title'>{title}</h2>
            <div className="items">
                {
                    items.map((item) => <CollectionItem key={item.id} item={item} />)
                }
            </div>
        </div>
    )
};
const mapStateToProps = ({ shop: { collections } }) => ({
    collections
})
export default connect(mapStateToProps)(CollectionPage);
