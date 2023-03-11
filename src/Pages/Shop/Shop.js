import React from 'react';
import { Route, Routes } from 'react-router-dom';
import CollectionsOverview from '../../Components/CollectionsOverview/CollectionsOverview';
import CollectionPage from '../Collection/Collection';

const Shop = () => {
    return (
        <div className='shop-page'>
            <Routes>
                <Route exact path='/' element={<CollectionsOverview />} />
                <Route exact path=':categoryId' element={<CollectionPage />} />
            </Routes>

        </div>
    );
};

export default Shop;