import React, { Component } from 'react';
import PreviewComponent from '../../Components/Preview-component/PreviewComponent';
import SHOP_DATA from './ShopData';

export default class Shop extends Component {
    constructor(props) {
        super(props);

        this.state = {
            collections: SHOP_DATA
        }
    }
    render() {
        const { collections } = this.state;
        return (
            <div className='shop-page'>

                {
                    collections.map(({ id, ...otherCollectionProps }) => {
                        return <PreviewComponent key={id} {...otherCollectionProps} />
                    })

                }

            </div>
        )
    }
}
