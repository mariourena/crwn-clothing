import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import collections from '../../config/shop.data';
import CollectionPreview from '../../components/collection-preview/collection-preview.component';

class ShopPage extends Component {
    constructor() {
        super();
        this.state = { collections }
    }

    render() {
        const { collections } = this.state;
        return (
            <div className="shop-page" id="ShopPage">
                {collections.map(({id, ...restOf}) => <CollectionPreview key={id} {...restOf} />)}
            </div>
        )
    }
}

export default withRouter(ShopPage);