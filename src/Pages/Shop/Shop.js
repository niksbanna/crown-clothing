import React from 'react';
import { connect } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import CollectionsOverview from '../../Components/CollectionsOverview/CollectionsOverview';
import { WithSpinner } from '../../Components/WithSpinner/WithSpinner';
import { convertCollectionsSnapshotToMap, firestore } from '../../Firebase/Firebase.utils';
import { updateCollections } from '../../Redux/Shop/ShopActions';
import CollectionPage from '../Collection/Collection';

const CollectionOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

class Shop extends React.Component {
    state = {
        loading: true
    }
    unSubscribeFromSnapshot = null;

    componentDidMount() {
        const { updateCollections } = this.props;
        const collectionRef = firestore.collection('collections');

        collectionRef.get().then(snapshot => {
            const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
            updateCollections(collectionsMap);
            this.setState({ loading: false });
        });

        // collectionRef.onSnapshot(async snapshot => {
        //     const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
        //     updateCollections(collectionsMap);
        //     this.setState({ loading: false });
        // })
    }

    render() {
        const { loading } = this.state;
        return (
            <div className='shop-page'>
                <Routes>
                    <Route exact path='/' element={<CollectionOverviewWithSpinner isLoading={loading} />} />
                    <Route exact path=':categoryId' element={<CollectionPageWithSpinner isLoading={loading} />} />
                </Routes>
            </div>
        )
    }
};
const mapDispatchToProps = dispatch => ({
    updateCollections: collectionsMap => dispatch(updateCollections(collectionsMap))
})
export default connect(null, mapDispatchToProps)(Shop);