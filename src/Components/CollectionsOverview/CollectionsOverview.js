import React, { useMemo } from 'react';
import { connect } from 'react-redux';
import PreviewComponent from '../Preview-component/PreviewComponent';
import './CollectionsOverview.scss';

const CollectionsOverview = ({ collections }) => {
    const memoCollections = useMemo(() => collections, [collections]);
    const collection = collections ? Object.keys(memoCollections).map(key => memoCollections[key]) : [];
    return (
        <div className='collections-overview'>
            {
                collection.map((collection) => {
                    return <PreviewComponent key={collection.id} collection={collection} />
                })
            }
        </div>
    )
};
const mapStateToProps = ({ shop: { collections } }) => ({
    collections
});

export default connect(mapStateToProps)(CollectionsOverview);
